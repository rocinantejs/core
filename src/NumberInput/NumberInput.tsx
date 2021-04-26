import "../tailwind.scss";

import classNames from "classnames";
import React, { useState } from "react";
import { MdExpandLess, MdExpandMore } from "react-icons/md";

import { Button } from "../Button";
import { InputComponent, inputVariantColorMap } from "../shared";

export interface NumberInputProps extends InputComponent {
  value?: number;
  onChange?: (value: number) => void;
}

export const NumberInput: React.FC<NumberInputProps> = ({
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
    <span className="flex">
      <input
        className={classNames(
          "flex-1 px-4 py-1 h-9 rounded-l text-white border transition-all outline-none",
          inputVariantColorMap[variant],
          error
            ? "shadow-red border-red-500"
            : "shadow border-dark-2 focus:border-blue-500",
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
          className="h-2/4 rounded-l-none rounded-br-none pt-0 pb-0 pl-2 pr-2"
          onClick={() => onNumberButtonClick(1)}
        >
          <MdExpandLess />
        </Button>
        <Button
          variant="secondary"
          className="h-2/4 rounded-l-none rounded-tr-none pt-0 pb-0  pl-2 pr-2"
          onClick={() => onNumberButtonClick(-1)}
        >
          <MdExpandMore />
        </Button>
      </span>
    </span>
  );
};
