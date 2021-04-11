// Generated with util/create-component.js
import React from "react";
import "../tailwind.scss";
import classnames from "classnames";
import { Component } from "../shared";

export interface CardProps extends Component {}

const Card: React.FC<CardProps> = ({ className, children, ...props }) => (
  <div
    className={classnames(
      "p-4 bg-dark-1 rounded-md shadow text-white w-auto",
      className
    )}
    {...props}
  >
    {children}
  </div>
);

export default Card;
