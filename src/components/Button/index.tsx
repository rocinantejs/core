import React from "react";
import styles from "./button.module.css";
import classNames from "classnames";

export interface ButtonProps {
  label: string;
  primary?: boolean;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({
  primary,
  backgroundColor,
  size = "medium",
  label,
  ...props
}) => {
  const mode = primary ? styles.primary : styles.secondary;
  return (
    <button
      type="button"
      className={classNames(styles.button, styles[size], mode)}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
