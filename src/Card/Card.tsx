import "../tailwind.scss";

import classNames from "classnames";
import React from "react";

import { Component } from "../shared";

export interface CardProps extends Component {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export const Card: React.FC<CardProps> = ({
  className,
  children,
  ...props
}) => (
  <div
    className={classNames(
      "rcn-p-4 rcn-bg-dark-1 rcn-rounded-md rcn-shadow rcn-text-white rcn-w-auto",
      className
    )}
    {...props}
  >
    {children}
  </div>
);
