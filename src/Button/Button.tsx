import "../tailwind.scss";

import classNames from "classnames";
import React, { PropsWithChildren } from "react";

import { Loading } from "../Loading";
import { Component } from "../shared";
import { Skeleton, useSkeletonContext } from "../Skeleton";

export interface ButtonProps extends Component {
  variant?: "primary" | "secondary" | "flat" | "danger";
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
}

export const Button: React.FC<PropsWithChildren<ButtonProps>> = ({
  children,
  className,
  variant = "primary",
  disabled = false,
  loading = false,
  ...props
}) => {
  const { showSkeleton } = useSkeletonContext();
  const baseStyles =
    "px-4 py-1 rounded text-white transition-all ease-in-out flex items-center relative outline-none focus:outline-none";

  const variantStyles: {
    [key in typeof variant]: { base: string; hover: string };
  } = {
    primary: {
      base:
        "shadow border-blue-500 border bg-gradient-to-r from-indigo-500 to-indigo-500 via-blue-500 bg-200% focus:shadow-blue",
      hover: "hover:bg-right",
    },
    danger: {
      base:
        "shadow border-red-500 border bg-gradient-to-r from-red-600 to-red-600 via-red-500 bg-200% focus:shadow-red",
      hover: "hover:bg-right",
    },
    secondary: {
      base: "shadow bg-dark-1 border-dark-2 border focus:shadow-dark",
      hover: "hover:bg-dark-0 hover:border-dark-1",
    },
    flat: {
      base: "border bg-dark-1 border-dark-1 focus:shadow-dark",
      hover: "hover:border-dark-2",
    },
  };

  if (showSkeleton) {
    return (
      <Skeleton
        className={classNames(baseStyles, className, "h-9 inline-block w-24")}
      />
    );
  }

  return (
    <button
      className={classNames(
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
      <span
        className={classNames(
          "flex w-full justify-center items-center",
          loading && "invisible"
        )}
      >
        {children}
      </span>
    </button>
  );
};
