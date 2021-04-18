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
      "p-4 bg-dark-1 rounded-md shadow text-white w-auto",
      className
    )}
    {...props}
  >
    {children}
  </div>
);
