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

export const TextInput: React.FC<TextInputProps> = ({
  placeholder,
  className,
  value,
  onChange,
  password,
  variant = "dark",
  ...props
}) => (
  <input
    className={classNames(
      "flex px-4 py-1 h-9 rounded shadow text-white border border-dark-2 focus:border-blue-500",
      inputVariantColorMap[variant],
      className
    )}
    placeholder={placeholder}
    value={value}
    type={password ? "password" : "text"}
    {...props}
  />
);
