import "../tailwind.scss";

import classNames from "classnames";
import React, { ReactElement, useState } from "react";

import { ButtonProps } from "../Button/Button";
import { Component } from "../shared";

export interface ButtonGroupProps extends Component {
  children: ReactElement<ButtonProps> | ReactElement<ButtonProps>[];
  selected?: number;
  onSelected?: (index: number) => void;
}

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
      if (index === 0) clazz = "rounded-r-none";
      else if (index === buttons.length - 1) clazz = "rounded-l-none";
      else clazz = "rounded-l-none rounded-r-none";

      const childClassNames = classNames(child.props.className, clazz);

      return React.cloneElement(child, {
        className: childClassNames,
        variant: index === resolvedSelected ? "primary" : "secondary",
        onClick: () => onButtonClick(index),
      });
    });
  };

  return (
    <div className={classNames("flex", className)} {...props}>
      {getChildComponents()}
    </div>
  );
};
