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
      inline && "rcn-flex rcn-flex-wrap rcn-items-center rcn-mb-2 last:rcn-mb-1"
    )}
    {...props}
  >
    <Typography
      variant="label"
      className={classNames(
        "rcn-text-white rcn-mr-2 rcn-inline-block",
        !inline && "rcn-mb-1"
      )}
    >
      {label}{" "}
      {labelInfo && <span className="rcn-text-dark-4">{labelInfo}</span>}
    </Typography>
    <div className="rcn-flex-1">{children}</div>
    {helperText && (
      <Typography
        variant="small"
        className="rcn-text-dark-4 rcn-flex-full rcn-mt-1"
      >
        {helperText}
      </Typography>
    )}
  </div>
);
