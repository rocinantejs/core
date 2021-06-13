/* eslint-disable no-plusplus */
import "../tailwind.scss";
import "./Popover.scss";

import classNames from "classnames";
import React, { useCallback, useState } from "react";
import { PopperProps, usePopper } from "react-popper";
import { CSSTransition } from "react-transition-group";
import usePortal from "react-useportal";

import { Card } from "../Card";
import { Component } from "../shared";

export interface PopoverProps extends Component {
  /**
   * The relative placement of the popover
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  placement?: PopperProps<any>["placement"];
  /**
   * Class name to applt to the popover arrow
   */
  arrowClassName?: string;
  /**
   * Visibility of the popover
   */
  visible?: boolean;
  /**
   * Should show overlay
   */
  overlay?: boolean;
  /**
   * If the target of the popover should be interactable when the overlay is enabled
   */
  targetInteractable?: boolean;
}

/**
 * The Popover component can be used to display contextual information to an element, or even be used as an in-place modal.
 *
 * It is considered "controlled" when the property visible is defined, and will show or hide based on the value.
 */
export const Popover: React.FC<PopoverProps> = ({
  children,
  placement = "auto",
  className,
  arrowClassName,
  visible,
  overlay,
  targetInteractable,
}) => {
  const [
    referenceElement,
    setReferenceElement,
  ] = useState<HTMLDivElement | null>(null);
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null
  );
  const [arrowElement, setArrowElement] = useState<HTMLDivElement | null>(null);
  const [isVisible, setVisibility] = useState(visible || false);
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

  const handleRefClick = useCallback(() => {
    if (isVisible && !targetInteractable) setVisibility(false);
    else if (!isVisible) setVisibility(true);
  }, [isVisible, targetInteractable]);

  const handleClickOverlay = useCallback<
    React.MouseEventHandler<HTMLDivElement>
  >(
    (event) => {
      event.preventDefault();
      event.stopPropagation();
      setVisibility(!isVisible);
    },
    [isVisible, setVisibility]
  );

  const handleKeyDown = React.useCallback(
    (event) => {
      if (event.key === "Escape") {
        setVisibility(!isVisible);
      }
    },
    [isVisible]
  );

  // eslint-disable-next-line consistent-return
  React.useEffect(() => {
    if (isVisible) {
      window.addEventListener("keydown", handleKeyDown, true);
      return () => {
        window.removeEventListener("keydown", handleKeyDown, true);
      };
    }
  }, [isVisible, handleKeyDown]);

  React.useEffect(() => {
    setVisibility(!!visible);
  }, [visible, setVisibility]);

  const controlled = visible !== undefined;

  return (
    <>
      {React.cloneElement(refEl as React.ReactElement, {
        ref: setReferenceElement,
        onClick: !controlled ? handleRefClick : undefined,
        style: { position: "relative", zIndex: isVisible ? 1000 : "unset" },
      })}
      <Portal>
        {overlay && isVisible && (
          // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
          <div
            role="dialog"
            onClick={handleClickOverlay}
            onKeyDown={handleKeyDown}
            className="rcn-fixed rcn-top-0 rcn-right-0 rcn-left-0 rcn-bottom-0"
          />
        )}
        <div
          id="rcn-popper"
          ref={setPopperElement}
          style={popperStyles.popper}
          {...attributes.popper}
        >
          <CSSTransition
            in={isVisible}
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
