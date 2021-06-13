import "../tailwind.scss";

import classNames from "classnames";
import React from "react";

import { Component } from "../shared";
import { Typography } from "../Typography";

export interface FormGroupProps extends Component {
  label: string;
  labelInfo?: string;
  helperText?: string;
  inline?: boolean;
}

export const FormGroup: React.FC<FormGroupProps> = ({
  label,
  labelInfo,
  helperText,
  inline = false,
  className,
  children,
  ...props
}) => (
  <div
    className={classNames(
      className,
      inline && "rcn-flex rcn-flex-wrap rcn-items-center"
    )}
    {...props}
  >
    <Typography
      variant="label"
      className={classNames("rcn-text-white rcn-mr-1")}
    >
      {label}{" "}
      {labelInfo && <span className="rcn-text-dark-4">{labelInfo}</span>}
    </Typography>
    <span className="rcn-flex-1">{children}</span>
    {helperText && (
      <Typography variant="small" className="rcn-text-dark-4 rcn-flex-full">
        {helperText}
      </Typography>
    )}
  </div>
);
