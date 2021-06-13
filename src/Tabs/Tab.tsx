import "../tailwind.scss";

import classNames from "classnames";
import React from "react";

import { Component } from "../shared";

export interface TabProps extends Component {
  name: string;
  label: string | React.ReactElement;
}

export const Tab: React.FC<TabProps> = ({ className, children, ...props }) => (
  <div className={classNames(className)} {...props}>
    {children}
  </div>
);
