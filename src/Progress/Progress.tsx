import "../tailwind.scss";

import classNames from "classnames";
import React from "react";

import { Component } from "../shared";

export interface ProgressProps extends Component {
  progress?: number;
}

export const Progress: React.FC<ProgressProps> = ({
  progress,
  className,
  ...props
}) => (
  <div className={classNames("relative", className)} {...props}>
    <div className="relative overflow-hidden h-2 mb-4 text-xs flex rounded bg-dark-0 border border-dark-2">
      <div className="shadow-none w-full flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-indigo-500 to-purple-500 via-blue-500 bg-200% animate-bg-scroll" />
      {progress !== undefined && (
        <div
          style={{ width: `${100 - progress}%` }}
          className="absolute h-2 right-0 shadow-none w-full flex flex-col text-center whitespace-nowrap text-white justify-center bg-dark-0"
        />
      )}
    </div>
  </div>
);
