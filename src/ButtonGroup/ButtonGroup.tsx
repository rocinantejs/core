import "../tailwind.scss";

import classNames from "classnames";
import React, { ReactElement, useState } from "react";

import { ButtonProps } from "../Button/Button";
import { Component } from "../shared";

export interface ButtonGroupProps extends Component {
  /**
   * One or more buttons to include in the button bar
   */
  children: ReactElement<ButtonProps> | ReactElement<ButtonProps>[];
  /**
   * The selected button index
   */
  selected?: number;
  /**
   * Fired when a button is selected
   */
  onSelected?: (index: number) => void;
}

/**
 * The button group element shows a group of buttons, passed in a children, in a unified button bar.
 *
 * It has a selected button and an event that triggers when a button is selected
 */
export const ButtonGroup: React.FC<ButtonGroupProps> = ({
  children,
  className,
  selected,
  onSelected,
  ...props
}) => {
  const [selectedState, setSelectedState] = useState(0);

  const resolvedSelected = selected !== undefined ? selected : selectedState;

  const onButtonClick = (index: number) => {
    if (selected !== undefined) onSelected(index);
    else setSelectedState(index);
  };

  const getChildComponents = () => {
    const buttons = Array.isArray(children) ? children : [children];

    return buttons.map((child: ReactElement<ButtonProps>, index: number) => {
      let clazz = "";
      if (index === 0) clazz = "rcn-rounded-r-none";
      else if (index === buttons.length - 1) clazz = "rcn-rounded-l-none";
      else clazz = "rcn-rounded-l-none rcn-rounded-r-none";

      const childClassNames = classNames(
        child.props.className,
        "rcn-flex-1",
        clazz
      );

      return React.cloneElement(child, {
        className: childClassNames,
        variant: index === resolvedSelected ? "primary" : "secondary",
        onClick: () => onButtonClick(index),
      });
    });
  };

  return (
    <div className={classNames("rcn-flex", className)} {...props}>
      {getChildComponents()}
    </div>
  );
};
