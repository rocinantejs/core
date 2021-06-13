import "../tailwind.scss";

import classNames from "classnames";
import React, { useState } from "react";

import { Component } from "../shared";
import { TabProps } from "./Tab";
import { TabTitle } from "./TabTitle";
import { Direction } from "./types";

export interface TabsProps extends Component {
  direction?: Direction;
  showTooltip?: boolean;
  children: React.ReactElement<TabProps>[];
}

export const Tabs: React.FC<TabsProps> = ({
  direction = "horizontal",
  className,
  children,
  showTooltip = false,
  ...props
}) => {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <div
      className={classNames(
        className,
        "rcn-flex",
        direction === "horizontal" ? "rcn-flex-col" : "rcn-flex-row"
      )}
      {...props}
    >
      <ul
        className={classNames(
          "rcn-border-dark-2 rcn-flex",
          direction === "horizontal"
            ? "rcn-flex-row rcn-border-b"
            : "rcn-flex-col rcn-border-r"
        )}
      >
        {children.map((item, index) => (
          <TabTitle
            key={item.props.name}
            direction={direction}
            name={item.props.name}
            index={index}
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
            showTooltip={showTooltip}
          >
            {item.props.label}
          </TabTitle>
        ))}
      </ul>
      {children[selectedTab]}
    </div>
  );
};
