import "../tailwind.scss";

import classNames from "classnames";
import React from "react";

import { Component } from "../shared";

export type PanelProps = Component;

export const Panel: React.FC<PanelProps> = ({
  className,
  children,
  ...props
}) => (
  <div
    className={classNames("p-4 bg-dark-1 text-white w-auto", className)}
    {...props}
  >
    {children}
  </div>
);
