// Generated with util/create-component.js
import React from "react";
import "../tailwind.scss";
import classnames from "classnames";
import { Component } from "../shared";
import Panel from "../Panel";

import "./Navbar.scss";

export interface NavbarProps extends Component {
  brand: React.ReactNode;
  navLinks?: React.ReactNode;
  navButtons?: React.ReactNode[];
}

const Navbar: React.FC<NavbarProps> = ({
  className,
  brand,
  navLinks,
  navButtons,
  ...props
}) => (
  <div className={classnames("h-16 flex border-dark-0", className)}>
    <Panel
      className="h-16 pr-8 py-0 flex items-center flex-1"
      {...props}
    >
      <span className="h-full flex items-center pr-16">{brand}</span>
      <span className="h-full flex items-center navLinks flex-1">
        {navLinks}
      </span>
    </Panel>
    {navButtons && navButtons.map(button => (
      <Panel className="h-16 px-4 py-0 flex items-center ml-0.5">
        {button}
      </Panel>
    ))}
  </div>
);

export default Navbar;
