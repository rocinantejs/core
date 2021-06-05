import "../tailwind.scss";

import classNames from "classnames";
import React, { useCallback, useMemo } from "react";

import { Component } from "../shared";
import { MenuContextProvider, useMenuContext } from "./MenuContext";
import { Direction } from "./types";

export interface MenuProps extends Component {
  /**
   * The display direction of the menu
   */
  direction?: Direction;
}

/**
 * The Menu component holds and formats menu items and other related components.
 *
 * Provides a MenuContext that can be used in a child component to obtain the direction
 */
export const Menu: React.FC<MenuProps> = ({
  className,
  direction = "vertical",
  children,
  ...props
}) => (
  <div
    className={classNames(
      className,
      "rcn-flex",
      direction === "vertical" ? "rcn-flex-col" : "rcn-flex-row"
    )}
    role="menu"
    {...props}
  >
    <MenuContextProvider value={{ direction }}>{children}</MenuContextProvider>
  </div>
);

export interface MenuItemProps extends Component {
  /**
   * An optional icon to display. Will collapse in a horizontal menu
   */
  icon?: React.ReactNode;
  /**
   * Label to show in the menu
   */
  label: React.ReactNode;
  /**
   * Fired when menu item is clicked or focused and enter key is released
   */
  onClick?: () => void;
}

/**
 * The Menu item component displays a formatted menu item, when provided an onClick prop it will show hover styles.
 */
export const MenuItem: React.FC<MenuItemProps> = ({
  className,
  icon,
  label,
  onClick,
  ...props
}) => {
  const { direction } = useMenuContext();

  const onKeyUp = useCallback<React.KeyboardEventHandler<HTMLDivElement>>(
    (e) => {
      if (e.key === "enter" && onClick) onClick();
    },
    [onClick]
  );

  const showIcon = useMemo(() => direction === "vertical" || icon, [
    direction,
    icon,
  ]);

  return (
    <div
      className={classNames(
        className,
        "rcn-flex rcn-bg-transparent rcn-pr-2 rcn-rounded-md rcn-transition-all",
        onClick &&
          "hover:rcn-bg-opacity-10 hover:rcn-bg-white rcn-cursor-pointer",
        !showIcon && "rcn-pl-2"
      )}
      onClick={onClick}
      onKeyUp={onKeyUp}
      role="menuitem"
      tabIndex={0}
      {...props}
    >
      {showIcon && (
        <span className="rcn-w-9 rcn-h-9 rcn-p-1 rcn-flex rcn-flex-col rcn-justify-center rcn-items-center rcn-text-white">
          {icon}
        </span>
      )}

      <span className="rcn-flex-1 rcn-flex rcn-flex-col rcn-justify-center rcn-text-white">
        {label}
      </span>
    </div>
  );
};

export const MenuDivider: React.FC<Component> = ({ className, ...props }) => {
  const { direction } = useMenuContext();
  return (
    <div
      className={classNames(
        className,
        direction === "vertical"
          ? "rcn-h-0.5 rcn-w-full rcn-my-2 rcn-border rcn-border-gray-500"
          : "rcn-w-0.5 rcn-mx-2 rcn-border rcn-border-gray-500"
      )}
      {...props}
    />
  );
};
