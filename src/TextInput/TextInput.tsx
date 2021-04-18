import "../tailwind.scss";

import classNames from "classnames";
import React from "react";

import { Component } from "../shared";

export interface TextInputProps extends Component {
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
  ...props
}) => (
  <input
    className={classNames(
      "flex px-4 py-1 h-9 rounded shadow text-white bg-dark-1 border border-dark-2 focus:border-blue-500",
      className
    )}
    placeholder={placeholder}
    value={value}
    type={password ? "text" : "password"}
    {...props}
  />
);
