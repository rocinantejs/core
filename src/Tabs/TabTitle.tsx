import "../tailwind.scss";
import "./TabTitle.scss";

import classNames from "classnames";
import React, { useCallback, useMemo } from "react";
import { CSSTransition } from "react-transition-group";

import { Component } from "../shared";
import { Direction } from "./types";

export interface TabTitleProps extends Component {
  label: string;
  direction?: Direction;
  index: number;
  selectedTab: number;
  setSelectedTab: (index: number) => void;
}

export const TabTitle: React.FC<TabTitleProps> = ({
  className,
  label,
  index,
  selectedTab,
  setSelectedTab,
  direction = "horizontal",
  ...props
}) => {
  const onClick = useCallback(() => {
    setSelectedTab(index);
  }, [setSelectedTab, index]);

  const isSelected = useMemo(() => index === selectedTab, [index, selectedTab]);

  return (
    <li className={classNames(className, "rcn-relative")} {...props}>
      <button
        type="button"
        onClick={onClick}
        className="rcn-p-2 rcn-text-white focus:rcn-outline-none"
      >
        {label}
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
  );
};
