// Generated with util/create-component.js
import React, { PropsWithChildren } from "react";
import "../tailwind.scss";
import classnames from "classnames";
import { Component } from "../shared";

export interface ButtonProps extends Component {
  variant?: "primary" | "secondary";
}

const Button: React.FC<PropsWithChildren<ButtonProps>> = ({
  children,
  className,
  variant = "primary",
  ...props
}) => {
  const baseStyles = "px-4 py-1 rounded text-white transition-all ease-in-out";

  const variantStyles: { [key in typeof variant]: string } = {
    primary:
      "bg-gradient-to-r from-indigo-500 to-purple-400 via-blue-500 bg-200% hover:bg-right",
    secondary: "bg-black bg-opacity-25 hover:bg-opacity-50",
  };

  return (
    <button
      data-testid="Button"
      className={classnames(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
