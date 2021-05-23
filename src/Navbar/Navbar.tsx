import "../tailwind.scss";
import "./Navbar.scss";

import classNames from "classnames";
import React from "react";

import { Panel } from "../Panel";
import { Component } from "../shared";

export interface NavbarProps extends Component {
  /**
   * Component to insert into the brand area of the navbar
   */
  brand: React.ReactNode;
  /**
   * Component to insert into the links area of the navbar
   */
  navLinks?: React.ReactNode;
  /**
   * Component to insert into the buttons area of the navbar
   */
  navButtons?: React.ReactNode[];
}

/**
 * The navbar component is a container for nav items
 */
export const Navbar: React.FC<NavbarProps> = ({
  className,
  brand,
  navLinks,
  navButtons,
  ...props
}) => (
  <div className={classNames("rcn-h-16 rcn-flex rcn-border-dark-0", className)}>
    <Panel
      className="rcn-h-16 rcn-pr-8 rcn-py-0 rcn-flex rcn-items-center rcn-flex-1"
      {...props}
    >
      <span className="rcn-h-full rcn-flex rcn-items-center rcn-pr-16">
        {brand}
      </span>
      <span className="rcn-h-full rcn-flex rcn-items-center navLinks rcn-flex-1">
        {navLinks}
      </span>
    </Panel>
    {navButtons &&
      navButtons.map((button) => (
        <Panel className="rcn-h-16 rcn-px-4 rcn-py-0 rcn-flex rcn-items-center rcn-ml-0.5">
          {button}
        </Panel>
      ))}
  </div>
);
