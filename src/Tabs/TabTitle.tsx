/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import "../tailwind.scss";
import "./TabTitle.scss";

import classNames from "classnames";
import React, { useCallback, useMemo } from "react";
import { CSSTransition } from "react-transition-group";

import { Component } from "../shared";
import { Tooltip } from "../Tooltip";
import { Direction } from "./types";

export interface TabTitleProps extends Component {
  name: string;
  direction?: Direction;
  index: number;
  selectedTab: number;
  showTooltip?: boolean;
  setSelectedTab: (index: number) => void;
}

export const TabTitle: React.FC<TabTitleProps> = ({
  className,
  name,
  index,
  selectedTab,
  setSelectedTab,
  showTooltip = false,
  direction = "horizontal",
  children,
  ...props
}) => {
  const onClick = useCallback(() => {
    setSelectedTab(index);
  }, [setSelectedTab, index]);

  const isSelected = useMemo(() => index === selectedTab, [index, selectedTab]);

  return (
    <Tooltip content={name} hidden={!showTooltip}>
      <li className={classNames(className, "rcn-relative")} {...props}>
        <button
          type="button"
          onClick={onClick}
          className="rcn-p-2 rcn-text-white focus:rcn-outline-none"
        >
          {children || name}
        </button>
        <CSSTransition
          in={isSelected}
          unmountOnExit
          classNames="rcn-tabtitle-transition"
          timeout={300}
        >
          <div
            className={classNames(
              "rcn-absolute rcn-bg-gradient-to-r rcn-from-indigo-500 rcn-to-blue-500 ",
              direction === "horizontal"
                ? "rcn-bottom-0 rcn-left-0 rcn-right-0 rcn-h-1"
                : "rcn-bottom-0 rcn-top-0 rcn-right-0 rcn-w-1"
            )}
          />
        </CSSTransition>
      </li>
    </Tooltip>
  );
};
