import "../tailwind.scss";

import classNames from "classnames";
import debounce from "lodash.debounce";
import React, { useCallback, useMemo, useState } from "react";
import { PopperProps } from "react-popper";

import { Popover } from "../Popover";
import { Component } from "../shared";

export interface TooltipProps extends Component {
  /**
   * The element that is the focus of the tooltip
   */
  children: React.ReactElement;
  /**
   * Content to be shown in the tooltip
   */
  content: string | React.ReactElement;
  /**
   * The ammount of time in milliseconds to wait before showing the tooltip
   */
  debounceDuration?: number;
  /**
   * The ammount of time in milliseconds to wait before hiding the tooltip
   */
  leaveDebounceDuration?: number;
  /**
   * The placement of the tooltip popover
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  placement?: PopperProps<any>["placement"];
  /**
   * If true will suppress the tooltip action
   */
  hidden?: boolean;
}

/**
 * The tooltip component will appear on mouse over of the child component after a preset duration of time, and will dissapear if the mouse leavs the component or the resultant tooltip
 */
export const Tooltip: React.FC<TooltipProps> = ({
  content,
  className,
  children,
  debounceDuration = 500,
  leaveDebounceDuration = 200,
  placement,
  hidden,
  ...props
}) => {
  const [toolTipVisible, setTooltipVisible] = useState(false);
  const setVisibleDebounce = useMemo(
    () => debounce(() => setTooltipVisible(true), debounceDuration),
    [debounceDuration, setTooltipVisible]
  );

  const setInvisibleDebounce = useMemo(
    () => debounce(() => setTooltipVisible(false), leaveDebounceDuration),
    [leaveDebounceDuration, setTooltipVisible]
  );

  const onMouseOver = useCallback(() => {
    setVisibleDebounce();
    setInvisibleDebounce.cancel();
  }, [setVisibleDebounce, setInvisibleDebounce]);

  const onMouseLeave = useCallback(() => {
    setInvisibleDebounce();
    setVisibleDebounce.cancel();
  }, [setInvisibleDebounce, setVisibleDebounce]);

  const onFocus = useCallback(() => {
    setTooltipVisible(true);
  }, [setTooltipVisible]);

  const onBlur = useCallback(() => {
    setTooltipVisible(false);
  }, [setTooltipVisible]);

  return (
    <Popover
      overlay={false}
      visible={!hidden && toolTipVisible}
      placement={placement}
    >
      {React.cloneElement(children, {
        onMouseOver,
        onMouseLeave,
        onFocus,
        onBlur,
      })}
      <div
        className={classNames(className)}
        onMouseOver={onMouseOver}
        onMouseLeave={onMouseLeave}
        onFocus={onFocus}
        onBlur={onBlur}
        {...props}
      >
        {content}
      </div>
    </Popover>
  );
};
