import "../tailwind.scss";

import classNames from "classnames";
import React from "react";

import { Component } from "../shared";

const variants = {
  h1: {
    tag: "h1",
    fontSize: "rcn-text-3xl",
    fontWeight: "rcn-font-semibold",
  },
  h2: {
    tag: "h2",
    fontSize: "rcn-text-2xl",
    fontWeight: "rcn-font-semibold",
  },
  h3: {
    tag: "h3",
    fontSize: "rcn-text-xl",
    fontWeight: "rcn-font-semibold",
  },
  h4: {
    tag: "h4",
    fontSize: "rcn-text-lg",
    fontWeight: "rcn-font-semibold",
  },
  h5: {
    tag: "h5",
    fontSize: "rcn-text-base",
    fontWeight: "rcn-font-semibold",
  },
  p: {
    tag: "p",
    fontSize: "rcn-text-base",
    fontWeight: "rcn-font-normal",
  },
  label: {
    tag: "label",
    fontSize: "rcn-text-base",
    fontWeight: "rcn-font-normal",
  },
  small: {
    tag: "p",
    fontSize: "rcn-text-sm",
    fontWeight: "rcn-font-light",
  },
  extraSmall: {
    tag: "p",
    fontSize: "rcn-text-xs",
    fontWeight: "rcn-font-light",
  },
};

export interface TypographyProps extends Component {
  /**
   * Controls the text size and wieght.
   * Some variants will also render with a contextual HTML tag
   */
  variant?: keyof typeof variants;
  /**
   * The ID string of the element which is associated with the control
   */
  htmlFor?: string;
}

/**
 * The typeography component should be used when displaying any kind of text.
 */
export const Typography: React.FC<TypographyProps> = ({
  variant = "p",
  className,
  children,
  ...props
}) => {
  const ElementTagName = variants[variant].tag as keyof JSX.IntrinsicElements;
  const variantProps = variants[variant];

  return (
    <ElementTagName
      className={classNames(
        variantProps.fontSize,
        variantProps.fontWeight,
        className
      )}
      {...props}
    >
      {children}
    </ElementTagName>
  );
};
