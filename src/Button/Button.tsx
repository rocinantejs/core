// Generated with util/create-component.js
import "../tailwind.scss";

import classnames from "classnames";
import React, { PropsWithChildren } from "react";

import Loading from "../Loading";
import { Component } from "../shared";
import Skeleton, { useSkeletonContext } from "../Skeleton";

export interface ButtonProps extends Component {
  variant?: "primary" | "secondary" | "flat";
  disabled?: boolean;
  loading?: boolean;
}

const Button: React.FC<PropsWithChildren<ButtonProps>> = ({
  children,
  className,
  variant = "primary",
  disabled = false,
  loading = false,
  ...props
}) => {
  const { showSkeleton } = useSkeletonContext();
  const baseStyles =
    "px-4 py-1 h-9 rounded text-white transition-all ease-in-out flex items-center relative";

  const variantStyles: {
    [key in typeof variant]: { base: string; hover: string };
  } = {
    primary: {
      base:
        "shadow border-blue-500 border bg-gradient-to-r from-indigo-500 to-purple-400 via-blue-500 bg-200%",
      hover: "hover:bg-right",
    },
    secondary: {
      base: "shadow bg-dark-1 border-dark-2 border",
      hover: "hover:bg-dark-0 hover:border-dark-1",
    },
    flat: {
      base: "border bg-dark-1 border-dark-1",
      hover: "hover:border-dark-2",
    },
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
      className={classnames(
        baseStyles,
        variantStyles[variant].base,
        !disabled && !loading && variantStyles[variant].hover,
        (disabled || loading) && "opacity-75 cursor-not-allowed",
        className
      )}
      type="button"
      {...props}
    >
      {loading && (
        <Loading
          height="1.5rem"
          width="2rem"
          className="absolute mx-auto left-2/4 transform -translate-x-2/4"
        />
      )}
      <span className={classnames("flex items-center", loading && "invisible")}>
        {children}
      </span>
    </button>
  );
};

export default Button;
