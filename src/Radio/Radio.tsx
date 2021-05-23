import "../tailwind.scss";
import "./Radio.scss";

import classNames from "classnames";
import React from "react";

import { Component, useUniqueId } from "../shared";
import { Skeleton, useSkeletonContext } from "../Skeleton";

export interface RadioProps extends Component {
  /**
   * Name of the radio group
   */
  name: string;
  /**
   * The label to display next to the radio
   */
  label: string;
  /**
   * Sets if the radio is checked
   * Setting this value will change the mode to controlled
   */
  checked?: boolean;
  /**
   * Fired when the radio or label is clicked
   */
  onChanged?: (value: boolean) => void;
}

type HtmlInputProps = Omit<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
  keyof RadioProps
>;

/**
 * The radio component is generated with an automatic unique id, and can be connected to other with the "name" prop.
 *
 * Will display as a skeleton when inside an active skeleton context.
 */
export const Radio: React.FC<HtmlInputProps & RadioProps> = ({
  checked,
  className,
  name,
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
          "rcn-relative rcn-flex rcn-items-center rcn-mb-4",
          className
        )}
      >
        <Skeleton className="rcn-inline-block rcn-h-4 rcn-w-4 rcn-rounded-full rcn-mr-2" />
        <Skeleton className="rcn-inline-block rcn-h-4 rcn-w-20 rcn-rounded" />
      </div>
    );
  }

  return (
    <div
      className={classNames(
        "rcn-flex rcn-items-center rcn-mr-4 rcn-mb-4",
        className
      )}
      {...props}
    >
      <input
        type="radio"
        name={name}
        id={id}
        checked={checked}
        onClick={(e) =>
          onChanged && onChanged((e.target as HTMLInputElement).checked)
        }
        className="toggle-radio rcn-appearance-none"
      />
      <label
        htmlFor={id}
        className="rcn-flex rcn-items-center rcn-cursor-pointer rcn-text-white"
      >
        <span className="toggle-radio-label rcn-w-4 rcn-h-4 rcn-inline-block rcn-mr-2 rcn-rounded-full rcn-bg-dark-0 rcn-border rcn-border-dark-2 rcn-transition-all" />
        {label}
      </label>
    </div>
  );
};
