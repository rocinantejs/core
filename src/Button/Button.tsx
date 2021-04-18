// Generated with util/create-component.js
import "../tailwind.scss";

import classnames from "classnames";
import React, { PropsWithChildren } from "react";

import { Component } from "../shared";
import Skeleton, { useSkeletonContext } from "../Skeleton";

export interface ButtonProps extends Component {
  variant?: "primary" | "secondary" | "flat";
}

const Button: React.FC<PropsWithChildren<ButtonProps>> = ({
  children,
  className,
  variant = "primary",
  ...props
}) => {
  const { showSkeleton } = useSkeletonContext();
  const baseStyles =
    "px-4 py-1 h-9 rounded text-white transition-all ease-in-out flex items-center";

  const variantStyles: { [key in typeof variant]: string } = {
    primary:
      "shadow border-blue-500 border bg-gradient-to-r from-indigo-500 to-purple-400 via-blue-500 bg-200% hover:bg-right",
    secondary:
      "shadow bg-dark-1 border-dark-2 border hover:bg-dark-0 hover:border-dark-1",
    flat: "hover:border-dark-2 border bg-dark-1 border-dark-1",
  };

  if (showSkeleton) {
    return (
      <Skeleton
        className={classnames(baseStyles, className, "inline-block w-24")}
      />
    );
  }

  return (
    <button
      className={classnames(baseStyles, variantStyles[variant], className)}
      type="button"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
