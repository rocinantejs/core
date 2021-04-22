/* eslint-disable jsx-a11y/label-has-associated-control */
import "../tailwind.scss";
import "./Checkbox.scss";

import classNames from "classnames";
import React from "react";

import { Component, useUniqueId } from "../shared";
import { Skeleton, useSkeletonContext } from "../Skeleton";

export interface CheckboxProps extends Component {
  label: string;
  checked?: boolean;
  onChanged?: (value: boolean) => void;
}

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
      <div className={classNames("relative flex items-center", className)}>
        <Skeleton className="inline-block h-6 w-10 rounded-full mr-2" />
        <Skeleton className="inline-block h-4 w-20 rounded" />
      </div>
    );
  }

  return (
    <div
      className={classNames(
        "relative inline-block mr-2 align-middle select-none transition duration-200 ease-in",
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
        className="toggle-checkbox absolute block w-4 h-4 top-1 left-1 rounded-full bg-gray-300 shadow appearance-none cursor-pointer checked:right-1 checked:left-5 transition-all"
      />
      <label
        htmlFor={id}
        className="flex items-center cursor-pointer text-white"
      >
        <span className="toggle-label block overflow-hidden h-6 w-10 mr-2 rounded-full bg-dark-0 border border-dark-2 cursor-pointer shadow-inner" />
        {label}
      </label>
    </div>
  );
};
