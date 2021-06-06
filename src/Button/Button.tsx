import "../tailwind.scss";

import classNames from "classnames";
import React from "react";

import { Loading } from "../Loading";
import { Component } from "../shared";
import { Skeleton, useSkeletonContext } from "../Skeleton";

export interface ButtonProps extends Component {
  /**
   * The variant prop controls the visual appearance of the button
   */
  variant?: "primary" | "secondary" | "flat" | "danger";
  /**
   * Toggles the disabled state
   */
  disabled?: boolean;
  /**
   * Toggles the loading state
   */
  loading?: boolean;
  /**
   * Sets if the button is a form submit button
   */
  submit?: boolean;
  /** Triggered when clicked */
  onClick?: () => void;
}

type HtmlButtonProps = Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  keyof ButtonProps
>;

/**
 * The button element has different appearances that can be changed by the "variant" prop.
 *
 * It can show a loading state via the "loading" prop and will display as a skeleton when inside an active skeleton context.
 */
export const Button = React.forwardRef<
  HTMLButtonElement,
  HtmlButtonProps & ButtonProps
>(
  (
    {
      children,
      className,
      variant = "primary",
      disabled = false,
      loading = false,
      submit = false,
      ...props
    },
    ref
  ) => {
    const { showSkeleton } = useSkeletonContext();
    const baseStyles =
      "rcn-px-4 rcn-py-1 rcn-rounded rcn-text-white rcn-transition-all rcn-ease-in-out rcn-flex rcn-items-center rcn-relative rcn-outline-none focus:rcn-outline-none";

    const variantStyles: {
      [key in typeof variant]: { base: string; hover: string };
    } = {
      primary: {
        base:
          "rcn-shadow rcn-border-blue-500 rcn-border rcn-bg-gradient-to-r rcn-from-indigo-500 rcn-to-indigo-500 rcn-via-blue-500 rcn-bg-200% focus:rcn-shadow-blue",
        hover: "hover:rcn-bg-right",
      },
      danger: {
        base:
          "rcn-shadow rcn-border-red-500 rcn-border rcn-bg-gradient-to-r rcn-from-red-600 rcn-to-red-600 rcn-via-red-500 rcn-bg-200% focus:rcn-shadow-red",
        hover: "hover:rcn-bg-right",
      },
      secondary: {
        base:
          "rcn-shadow rcn-bg-white rcn-bg-opacity-10 rcn-border-dark-3 rcn-border focus:rcn-border-dark-4",
        hover: "hover:rcn-bg-dark-2 hover:rcn-border-dark-2",
      },
      flat: {
        base:
          "rcn-border rcn-bg-dark-1 rcn-border-dark-1 focus:rcn-border-dark-3",
        hover: "hover:rcn-bg-white hover:rcn-bg-opacity-10",
      },
    };

    if (showSkeleton) {
      return (
        <Skeleton
          className={classNames(
            baseStyles,
            className,
            "rcn-h-9 rcn-inline-block rcn-w-24"
          )}
        />
      );
    }

    return (
      <button
        className={classNames(
          baseStyles,
          variantStyles[variant].base,
          !disabled && !loading && variantStyles[variant].hover,
          (disabled || loading) && "rcn-opacity-75 rcn-cursor-not-allowed",
          className
        )}
        type={submit ? "submit" : "button"}
        ref={ref}
        {...props}
      >
        {loading && (
          <Loading
            height="1.5rem"
            width="2rem"
            className="rcn-absolute rcn-mx-auto rcn-left-2/4 rcn-transform rcn--translate-x-2/4"
          />
        )}
        <span
          className={classNames(
            "rcn-flex rcn-w-full rcn-justify-center rcn-items-center",
            loading && "rcn-invisible"
          )}
        >
          {children}
        </span>
      </button>
    );
  }
);
