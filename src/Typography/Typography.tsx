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
};

export interface TypographyProps extends Component {
  variant?: keyof typeof variants;
  htmlFor?: string;
}

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
