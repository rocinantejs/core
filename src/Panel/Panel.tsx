// Generated with util/create-component.js
import "../tailwind.scss";

import classnames from "classnames";
import React from "react";

import { Component } from "../shared";

export type CardProps = Component;

const Panel: React.FC<CardProps> = ({ className, children, ...props }) => (
  <div
    className={classnames("p-4 bg-dark-1 text-white w-auto", className)}
    {...props}
  >
    {children}
  </div>
);

export default Panel;
