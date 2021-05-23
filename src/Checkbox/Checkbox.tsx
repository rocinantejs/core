/* eslint-disable jsx-a11y/label-has-associated-control */
import "../tailwind.scss";
import "./Checkbox.scss";

import classNames from "classnames";
import React from "react";

import { Component, useUniqueId } from "../shared";
import { Skeleton, useSkeletonContext } from "../Skeleton";

export interface CheckboxProps extends Component {
  /**
   * The label to display next to the checkbox
   */
  label: string;
  /**
   * Setting this value will change the mode to controlled
   */
  checked?: boolean;
  /**
   * Fired when the checkbox or label is clicked
   */
  onChanged?: (value: boolean) => void;
}

/**
 * The checkbox component is styled like a switch.
 *
 * Will display as a skeleton when inside an active skeleton context.
 */
export const Checkbox: React.FC<CheckboxProps> = ({
  className,
  checked,
  onChanged,
  label,
  ...props
}) => {
  const id = useUniqueId("radio");
  const { showSkeleton } = useSkeletonContext();

  if (showSkeleton) {
    return (
      <div
        className={classNames(
          "rcn-relative rcn-flex rcn-items-center",
          className
        )}
      >
        <Skeleton className="rcn-inline-block rcn-h-6 rcn-w-10 rcn-rounded-full rcn-mr-2" />
        <Skeleton className="rcn-inline-block rcn-h-4 rcn-w-20 rcn-rounded" />
      </div>
    );
  }

  return (
    <div
      className={classNames(
        "rcn-relative rcn-inline-block rcn-mr-2 rcn-align-middle rcn-select-none rcn-transition rcn-duration-200 rcn-ease-in",
        className
      )}
      {...props}
    >
      <input
        type="checkbox"
        name="toggle"
        id={id}
        checked={checked}
        onClick={(e) =>
          onChanged && onChanged((e.target as HTMLInputElement).checked)
        }
        className="toggle-checkbox rcn-absolute rcn-block rcn-w-4 rcn-h-4 rcn-top-1 rcn-left-1 rcn-rounded-full rcn-bg-gray-300 rcn-shadow rcn-appearance-none rcn-cursor-pointer checked:rcn-right-1 checked:rcn-left-5 rcn-transition-all"
      />
      <label
        htmlFor={id}
        className="rcn-flex rcn-items-center rcn-cursor-pointer rcn-text-white"
      >
        <span className="toggle-label rcn-block rcn-overflow-hidden rcn-h-6 rcn-w-10 rcn-mr-2 rcn-rounded-full rcn-bg-dark-0 rcn-border rcn-border-dark-2 rcn-cursor-pointer rcn-shadow-inner" />
        {label}
      </label>
    </div>
  );
};
