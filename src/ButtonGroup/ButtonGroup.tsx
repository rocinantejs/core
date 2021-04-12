// Generated with util/create-component.js
import "../tailwind.scss";
import "./ButtonGroup.scss";

import classnames from "classnames";
import React from "react";

import { Component } from "../shared";

export interface ButtonGroupProps extends Component {
  foo: string;
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({
  foo,
  className,
  ...props
}) => (
  <div className={classnames(className)} {...props}>
    {foo}
  </div>
);

export default ButtonGroup;
