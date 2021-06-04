import "../tailwind.scss";

import React, { useCallback, useEffect, useState } from "react";
import { Range as ReactRange } from "react-range";
import { CSSTransition } from "react-transition-group";

import { Component } from "../shared";
import { Typography } from "../Typography";

type RangeValue = number | [min: number, max: number];

export interface RangeProps extends Component {
  /**
   * Single or multiple values of the range
   */
  value?: RangeValue;
  /**
   * Minimum range value
   */
  min?: number;
  /**
   * Maximum range value
   */
  max?: number;
  /**
   * Range thumb step
   */
  step?: number;
  /**
   * Is the range disabled
   */
  disabled?: boolean;
  /**
   * Allow overlap when multiple thumbs are used
   */
  allowOverlap?: boolean;
  /** When there are multiple thumbs on a single track, should it be possible to drag all thumbs at once */
  draggableTrack?: boolean;
  /**
   * Show mim and max labels
   */
  showLabels?: boolean;
  /**
   * Fired when any thumb is moved
   */
  onChange?: (value: RangeValue) => void;
  /**
   * Fired when any thumb has finished moving
   */
  onFinalChange?: (value: RangeValue) => void;
}

/**
 * The range slider can take either one or two values, acting as  normal slider or range slider respectively
 */
export const Range: React.FC<RangeProps> = ({
  className,
  value: propValues,
  min = 0,
  max = 100,
  allowOverlap = false,
  step,
  onChange,
  onFinalChange,
  showLabels,
  ...props
}) => {
  const [value, setValue] = useState<RangeValue>(propValues || 0);

  useEffect(() => {
    if (propValues !== undefined) {
      setValue(propValues);
    }
  }, [propValues]);

  const onValuesChange = useCallback(
    (newValues: number[]) => {
      const theValues: RangeValue =
        newValues.length === 1 ? newValues[0] : [newValues[0], newValues[1]];
      setValue(theValues);
      if (onChange) onChange(theValues);
    },
    [setValue, onChange]
  );

  const onValuesFinalChange = useCallback(
    (newValues: number[]) => {
      const theValues: RangeValue =
        newValues.length === 1 ? newValues[0] : [newValues[0], newValues[1]];
      if (onFinalChange) onFinalChange(theValues);
    },
    [onFinalChange]
  );

  return (
    <div className={className}>
      <ReactRange
        values={Array.isArray(value) ? value : [value]}
        onChange={onValuesChange}
        onFinalChange={onValuesFinalChange}
        min={min}
        max={max}
        allowOverlap={allowOverlap}
        step={step}
        renderTrack={({ props: trackProps, children }) => {
          const range = max - min;
          const rightBar = Array.isArray(value)
            ? (value[1] / range) * 100
            : (value / range) * 100;

          const leftBar = Array.isArray(value)
            ? (value[0] / range) * 100
            : undefined;

          return (
            <div className="rcn-relative">
              <div
                {...trackProps}
                style={{
                  ...trackProps.style,
                }}
                className="rcn-relative rcn-h-2 rcn-text-xs rcn-flex rcn-rounded rcn-bg-dark-0 rcn-border rcn-border-dark-2"
              >
                <div className="rcn-w-full rcn-rounded rcn-flex rcn-flex-col rcn-justify-center rcn-bg-gradient-to-r rcn-from-indigo-500 rcn-to-blue-500" />
                {rightBar !== undefined && (
                  <div
                    style={{ width: `${100 - rightBar}%` }}
                    className="rcn-absolute rcn-h-2 rcn-right-0 rcn-w-full rcn-rounded rcn-flex rcn-flex-col rcn-justify-center rcn-bg-dark-0"
                  />
                )}
                {leftBar !== undefined && (
                  <div
                    style={{ width: `${leftBar}%` }}
                    className="rcn-absolute rcn-h-2 rcn-left-0 rcn-w-full rcn-rounded rcn-flex rcn-flex-col rcn-justify-center rcn-bg-dark-0"
                  />
                )}
                {children}
              </div>
            </div>
          );
        }}
        renderThumb={({ props: thumbProps, isDragged, index }) => (
          <div
            {...thumbProps}
            style={{
              ...thumbProps.style,
            }}
            className="focus:rcn-outline-none"
          >
            <CSSTransition
              in={isDragged}
              unmountOnExit
              classNames="rcn-popover-transition"
              timeout={300}
            >
              <div
                style={{ top: "-30px", transform: "translateX(-25%)" }}
                className="rcn-absolute rcn-bg-blue-500 rcn-text-white rcn-font-bold rcn-p-1 rcn-rounded top"
              >
                {Array.isArray(value)
                  ? value[index].toFixed(1)
                  : value.toFixed(1)}
              </div>
            </CSSTransition>
            <div className="rcn-w-4 rcn-h-4 rcn-rounded-full rcn-bg-gray-300 rcn-shadow rcn-appearance-none rcn-cursor-pointer" />
          </div>
        )}
        {...props}
      />
      {showLabels && (
        <div className="rcn-flex rcn-justify-between rcn-mt-1">
          <Typography variant="small" className="rcn-text-white">
            {min}
          </Typography>
          <Typography variant="small" className="rcn-text-white">
            {max}
          </Typography>
        </div>
      )}
    </div>
  );
};
