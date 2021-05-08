import "../tailwind.scss";

import classNames from "classnames";
import React from "react";

import { InputComponent, inputVariantColorMap } from "../shared";

export interface TextInputProps extends InputComponent {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  password?: boolean;
}

type HtmlInputProps = Omit<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
  keyof TextInputProps
>;

export const TextInput: React.FC<HtmlInputProps & TextInputProps> = ({
  placeholder,
  className,
  value,
  onChange,
  password,
  variant = "dark",
  error,
  ...props
}) => (
  <input
    className={classNames(
      "rcn-flex rcn-px-4 rcn-py-1 rcn-h-9 rcn-rounded rcn-text-white rcn-border rcn-transition-all rcn-outline-none",
      inputVariantColorMap[variant],
      error
        ? "rcn-shadow-red rcn-border-red-500"
        : "rcn-shadow rcn-border-dark-2 focus:rcn-border-blue-500",
      className
    )}
    placeholder={placeholder}
    value={value}
    type={password ? "password" : "text"}
    onChange={(e) => onChange && onChange(e.target.value)}
    {...props}
  />
);
