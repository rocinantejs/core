// Generated with util/create-component.js
import React from "react";
import "../tailwind.scss";
import classnames from "classnames";
import { Component } from "../shared";

import "./Checkbox.scss";

export interface CheckboxProps extends Component {
  label?: string;
  checked?: boolean;
  onChanged?: (value: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  className,
  checked,
  onChanged,
  ...props
}) => {

  return (
    <>
      <div
        className={classnames(
          "relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in",
          className
        )}
        {...props}
      >
        <input
          type="checkbox"
          name="toggle"
          id="toggle"
          checked={checked}
          onClick={(e: any) => onChanged && onChanged(e.target.checked)}
          className="toggle-checkbox absolute block w-4 h-4 top-1 left-1 rounded-full bg-gray-300 shadow appearance-none cursor-pointer checked:right-1 checked:left-5 transition-all"
        />
        <label
          htmlFor="toggle"
          className="toggle-label block overflow-hidden h-6 rounded-full bg-dark-1 border border-dark-2 cursor-pointer shadow-inner"
        ></label>
      </div>
      {label && (
        <label htmlFor="toggle" className="text-xs text-white">
          {label}
        </label>
      )}
    </>
  );
};

export default Checkbox;
