import "../tailwind.scss";

import classNames from "classnames";
import React from "react";

import { Component } from "../shared";

export interface ProgressProps extends Component {
  /**
   * The current progress. Range from 0 to 100
   */
  progress?: number;
}

/**
 * The progress component can be used to display moving or stationary progress bars
 */
export const Progress: React.FC<ProgressProps> = ({
  progress,
  className,
  ...props
}) => (
  <div className={classNames("rcn-relative", className)} {...props}>
    <div className="rcn-relative rcn-overflow-hidden rcn-h-2 rcn-mb-4 rcn-text-xs rcn-flex rcn-rounded rcn-bg-dark-0 rcn-border rcn-border-dark-2">
      <div className="rcn-shadow-none rcn-w-full rcn-flex rcn-flex-col rcn-text-center rcn-whitespace-nowrap rcn-text-white rcn-justify-center rcn-bg-gradient-to-r rcn-from-indigo-500 rcn-to-purple-500 rcn-via-blue-500 rcn-bg-200% rcn-animate-bg-scroll" />
      {progress !== undefined && (
        <div
          style={{ width: `${100 - progress}%` }}
          className="rcn-absolute rcn-h-2 rcn-right-0 rcn-shadow-none rcn-w-full rcn-flex rcn-flex-col rcn-text-center rcn-whitespace-nowrap rcn-text-white rcn-justify-center rcn-bg-dark-0"
        />
      )}
    </div>
  </div>
);
