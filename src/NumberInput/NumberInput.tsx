import "../tailwind.scss";

import classNames from "classnames";
import React, { useState } from "react";
import { MdExpandLess, MdExpandMore } from "react-icons/md";

import { Button } from "../Button";
import { InputComponent, inputVariantColorMap } from "../shared";

export interface NumberInputProps extends InputComponent {
  /**
   * Current numerical value
   */
  value?: number;
  /**
   * Fired when the value is changed
   */
  onChange?: (value: number) => void;
}

type HtmlInputProps = Omit<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
  keyof NumberInputProps
>;

/**
 * The number input accepts any numeric input. The value can be changed in integer increments by the buttons.
 */
export const NumberInput: React.FC<HtmlInputProps & NumberInputProps> = ({
  className,
  value = 0,
  onChange,
  variant = "dark",
  error,
  ...props
}) => {
  const [textValue, setTextValue] = useState<string>(value.toString());

  const onValueChanged: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    if (
      event.target.value.match(/^-?[0-9\b]+(\.[0-9\b]*)?$/) ||
      event.target.value === "" ||
      event.target.value === "-"
    ) {
      setTextValue(event.target.value);
      return;
    }
    event.preventDefault();
  };

  const setResultantValue = (resultant: number) => {
    setTextValue(resultant.toString());
    if (onChange) onChange(resultant);
  };

  const onBlur: React.FocusEventHandler<HTMLInputElement> = (event) => {
    if (
      !event.target.value.match(/^-?[0-9\b]+(\.[0-9\b]+)?$/) ||
      event.target.value === ""
    )
      if (event.target.value.match(/^-?[0-9\b]+(\.)$/)) {
        setResultantValue(parseFloat(`${event.target.value}0`));
      } else {
        setResultantValue(0);
      }
    else {
      setResultantValue(parseFloat(event.target.value));
    }
  };

  const onNumberButtonClick = (addValue: number) => {
    setResultantValue(parseFloat(textValue) + addValue);
  };

  return (
    <span className="rcn-flex">
      <input
        className={classNames(
          "rcn-flex-1 rcn-px-4 rcn-py-1 rcn-h-9 rcn-rounded-l rcn-text-white rcn-border rcn-transition-all rcn-outline-none",
          inputVariantColorMap[variant],
          error
            ? "rcn-shadow-red rcn-border-red-500"
            : "rcn-shadow rcn-border-dark-2 focus:rcn-border-blue-500",
          className
        )}
        value={textValue}
        type="text"
        onChange={onValueChanged}
        onBlur={onBlur}
        {...props}
      />
      <span>
        <Button
          variant="secondary"
          className="rcn-h-2/4 rcn-rounded-l-none rcn-rounded-br-none rcn-pt-0 rcn-pb-0 rcn-pl-2 rcn-pr-2"
          onClick={() => onNumberButtonClick(1)}
        >
          <MdExpandLess />
        </Button>
        <Button
          variant="secondary"
          className="rcn-h-2/4 rcn-rounded-l-none rcn-rounded-tr-none rcn-pt-0 rcn-pb-0  rcn-pl-2 rcn-pr-2"
          onClick={() => onNumberButtonClick(-1)}
        >
          <MdExpandMore />
        </Button>
      </span>
    </span>
  );
};
