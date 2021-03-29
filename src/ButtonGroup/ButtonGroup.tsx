// Generated with util/create-component.js
import React from "react";
import "../tailwind.scss";
import classnames from "classnames";
import { Component } from "../shared";

import "./ButtonGroup.scss";

export interface ButtonGroupProps extends Component {
  foo: string;
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({
  foo,
  className,
  ...props
}) => (
    <div className={classnames(className)} {...props}>{foo}</div>
);

export default ButtonGroup;

