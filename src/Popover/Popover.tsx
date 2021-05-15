/* eslint-disable no-plusplus */
import "../tailwind.scss";
import "./Popover.scss";

import classNames from "classnames";
import React, { useState } from "react";
import { PopperProps, usePopper } from "react-popper";
import { CSSTransition } from "react-transition-group";
import usePortal from "react-useportal";

import { Card } from "../Card";
import { Component } from "../shared";

export interface PopoverProps extends Component {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  placement?: PopperProps<any>["placement"];
  arrowClassName?: string;
  visible?: boolean;
}

export const Popover: React.FC<PopoverProps> = ({
  children,
  placement,
  className,
  arrowClassName,
  visible,
}) => {
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const [arrowElement, setArrowElement] = useState(null);
  const [visibility, setVisibility] = useState(visible || false);
  const { styles: popperStyles, attributes } = usePopper(
    referenceElement,
    popperElement,
    {
      placement,
      modifiers: [
        { name: "arrow", options: { element: arrowElement } },
        {
          name: "offset",
          options: {
            offset: [0, 8],
          },
        },
      ],
    }
  );
  const { Portal } = usePortal();

  if (React.Children.count(children) !== 2) {
    throw new Error("Popover must have two children only");
  }
  const childrenArr = React.Children.toArray(children);
  const refEl = childrenArr[0];
  const portalEl = childrenArr[1];

  const handleRefClick = () => {
    setVisibility(!visibility);
  };

  const controlled = visible !== undefined;

  return (
    <>
      {React.cloneElement(refEl as React.ReactElement, {
        ref: setReferenceElement,
        onClick: !controlled ? handleRefClick : undefined,
      })}
      <Portal>
        <div
          id="rcn-popper"
          ref={setPopperElement}
          style={popperStyles.popper}
          {...attributes.popper}
        >
          <CSSTransition
            in={visibility}
            unmountOnExit
            classNames="rcn-popover-transition"
            timeout={300}
          >
            <div>
              <Card className={classNames("rcn-bg-dark-3", className)}>
                {portalEl}
              </Card>
              <div
                ref={setArrowElement}
                style={popperStyles.arrow}
                id="rcn-popper-arrow"
                className={classNames("rcn-bg-dark-3", arrowClassName)}
                data-popper-arrow
              />
            </div>
          </CSSTransition>
        </div>
      </Portal>
    </>
  );
};
