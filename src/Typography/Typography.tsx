// Generated with util/create-component.js
import React from "react";
import "../tailwind.scss";
import classnames from "classnames";
import { Component } from "../shared";

const variants = {
  h1: {
    tag: "h1",
    fontSize: "text-3xl",
    fontWeight: "font-semibold",
  },
  h2: {
    tag: "h2",
    fontSize: "text-2xl",
    fontWeight: "font-semibold",
  },
  h3: {
    tag: "h3",
    fontSize: "text-xl",
    fontWeight: "font-semibold",
  },
  h4: {
    tag: "h4",
    fontSize: "text-lg",
    fontWeight: "font-semibold",
  },
  h5: {
    tag: "h5",
    fontSize: "text-base",
    fontWeight: "font-semibold",
  },
  p: {
    tag: "p",
    fontSize: "text-base",
    fontWeight: "font-normal",
  },
  small: {
    tag: "p",
    fontSize: "text-sm",
    fontWeight: "font-light",
  },
};

export interface TypographyProps extends Component {
  variant?: keyof typeof variants;
}

const Typography: React.FC<TypographyProps> = ({
  variant = "p",
  className,
  children,
  ...props
}) => {
  const ElementTagName = variants[variant].tag as keyof JSX.IntrinsicElements;
  const variantProps = variants[variant];

  return (
    <ElementTagName
      className={classnames(
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

export default Typography;
