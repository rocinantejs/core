import "../tailwind.scss";

import classNames from "classnames";
import React, { ReactElement, useCallback, useMemo, useState } from "react";

import { ButtonProps } from "../Button/Button";
import { Component } from "../shared";

type NamedButtonProps = ButtonProps & { name: string };

export interface ButtonGroupProps extends Component {
  /**
   * One or more buttons to include in the button bar. Each button must have a {name} prop.
   */
  children: ReactElement<NamedButtonProps> | ReactElement<NamedButtonProps>[];
  /**
   * The selected button
   */
  selected?: string;
  /**
   * Fired when a button is selected
   */
  onSelected?: (name: string) => void;
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
  const [selectedState, setSelectedState] = useState<string | undefined>(
    selected
  );

  const resolvedSelected = useMemo(
    () => (selected !== undefined ? selected : selectedState),
    [selected, selectedState]
  );

  const onButtonClick = useCallback(
    (name: string) => {
      if (selected !== undefined && onSelected) onSelected(name);
      else setSelectedState(name);
    },
    [onSelected, selected]
  );

  const childComponents = useMemo(() => {
    const buttons: ReactElement<NamedButtonProps>[] = ((Array.isArray(children)
      ? children
      : [children]) as unknown) as ReactElement<NamedButtonProps>[];

    return buttons.map(
      (child: ReactElement<NamedButtonProps>, index: number) => {
        const primary = resolvedSelected
          ? child.props.name === resolvedSelected
          : index === 0;

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
          variant: primary ? "primary" : "secondary",
          onClick: () => onButtonClick(child.props.name),
        });
      }
    );
  }, [children, onButtonClick, resolvedSelected]);

  return (
    <div className={classNames("rcn-flex", className)} {...props}>
      {childComponents}
    </div>
  );
};
