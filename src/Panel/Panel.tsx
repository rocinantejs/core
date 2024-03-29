import "../tailwind.scss";

import classNames from "classnames";
import React from "react";

import { Component } from "../shared";

export type PanelProps = Component;

/**
 * The Card component is a simple component used for styling and layout
 */
export const Panel: React.FC<PanelProps> = ({
  className,
  children,
  ...props
}) => (
  <div
    className={classNames(
      "rcn-p-4 rcn-bg-dark-1 rcn-text-white rcn-w-auto",
      className
    )}
    {...props}
  >
    {children}
  </div>
);
