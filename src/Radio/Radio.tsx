import "../tailwind.scss";
import "./Radio.scss";

import classNames from "classnames";
import React from "react";

import { Component, useUniqueId } from "../shared";
import { Skeleton, useSkeletonContext } from "../Skeleton";

export interface RadioProps extends Component {
  name: string;
  label: string;
  checked?: boolean;
  onChanged?: (value: boolean) => void;
}

export const Radio: React.FC<RadioProps> = ({
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
