/* eslint-disable no-nested-ternary */
import "../tailwind.scss";

import classNames from "classnames";
import React, { useCallback, useState } from "react";

import { InputComponent, inputVariantColorMap } from "../shared";

export interface TextInputProps extends InputComponent {
  /**
   * A placeholder to show
   */
  placeholder?: string;
  /**
   * Current value of the text input
   */
  value?: string;
  /**
   * Fired when the value is changed
   */
  onChange?: (value: string) => void;
  /**
   * Sets if the input is a password field
   */
  password?: boolean;
  /**
   * An element to show inside the left side of the input
   */
  leftElement?: React.ReactElement;
  /**
   * An element to show inside the right side of the input
   */
  rightElement?: React.ReactElement;
}

type HtmlInputProps = Omit<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
  keyof TextInputProps
>;

/**
 * The text input accepts any input as text
 */
export const TextInput: React.FC<HtmlInputProps & TextInputProps> = ({
  placeholder,
  className,
  value,
  onChange,
  password,
  variant = "dark",
  error,
  leftElement,
  rightElement,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const onInputFocus = useCallback(() => {
    setIsFocused(true);
  }, [setIsFocused]);

  const onInputBlur = useCallback(() => {
    setIsFocused(false);
  }, [setIsFocused]);

  return (
    <div
      className={classNames(
        "rcn-flex rcn-py-1 rcn-h-9 rcn-rounded rcn-text-white rcn-border rcn-transition-all rcn-outline-none rcn-w-full rcn-items-center",
        inputVariantColorMap[variant],
        isFocused
          ? "rcn-border-blue-500"
          : error
          ? "rcn-shadow-red rcn-border-red-500"
          : "rcn-shadow rcn-border-dark-2",
        leftElement ? "rcn-pl-1" : "rcn-pl-4",
        rightElement ? "rcn-pr-1" : "rcn-pr-4",
        className
      )}
    >
      {leftElement && <div className="rcn-mr-1">{leftElement}</div>}
      <input
        placeholder={placeholder}
        value={value}
        type={password ? "password" : "text"}
        onChange={(e) => onChange && onChange(e.target.value)}
        onFocus={onInputFocus}
        onBlur={onInputBlur}
        className={classNames(
          "rcn-text-white rcn-bg-transparent focus:rcn-outline-none rcn-w-full"
        )}
        {...props}
      />
      {rightElement && <div className="rcn-ml-1">{rightElement}</div>}
    </div>
  );
};
