import "../tailwind.scss";
import "./Navbar.scss";

import classNames from "classnames";
import React from "react";

import { Panel } from "../Panel";
import { Component } from "../shared";

export interface NavbarProps extends Component {
  brand: React.ReactNode;
  navLinks?: React.ReactNode;
  navButtons?: React.ReactNode[];
}

export const Navbar: React.FC<NavbarProps> = ({
  className,
  brand,
  navLinks,
  navButtons,
  ...props
}) => (
  <div className={classNames("h-16 flex border-dark-0", className)}>
    <Panel className="h-16 pr-8 py-0 flex items-center flex-1" {...props}>
      <span className="h-full flex items-center pr-16">{brand}</span>
      <span className="h-full flex items-center navLinks flex-1">
        {navLinks}
      </span>
    </Panel>
    {navButtons &&
      navButtons.map((button) => (
        <Panel className="h-16 px-4 py-0 flex items-center ml-0.5">
          {button}
        </Panel>
      ))}
  </div>
);
