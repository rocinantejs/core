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
  const baseStyles = "px-4 py-1 rounded shadow text-white transition-all ease-in-out";

  const variantStyles: { [key in typeof variant]: string } = {
    primary:
      "border-blue-500 border bg-gradient-to-r from-indigo-500 to-purple-400 via-blue-500 bg-200% hover:bg-right",
    secondary: "bg-dark-1 border-dark-2 border hover:bg-opacity-50",
  };

  return (
    <button
      className={classnames(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
