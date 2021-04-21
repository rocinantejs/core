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
      <div className={classNames("relative flex items-center mb-4", className)}>
        <Skeleton className="inline-block h-4 w-4 rounded-full mr-2" />
        <Skeleton className="inline-block h-4 w-20 rounded" />
      </div>
    );
  }

  return (
    <div
      className={classNames("flex items-center mr-4 mb-4", className)}
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
        className="toggle-radio appearance-none"
      />
      <label
        htmlFor={id}
        className="flex items-center cursor-pointer text-white"
      >
        <span className="toggle-radio-label w-4 h-4 inline-block mr-2 rounded-full bg-dark-0 border border-dark-2" />
        {label}
      </label>
    </div>
  );
};
