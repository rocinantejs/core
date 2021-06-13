/* eslint-disable no-nested-ternary */
import "../tailwind.scss";
import "./ColorInput.scss";

import classNames from "classnames";
import debounce from "lodash.debounce";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { SketchPicker } from "react-color";
import { MdPalette } from "react-icons/md";

import { Popover } from "../Popover";
import { InputComponent, inputVariantColorMap } from "../shared";

const colorRegex = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d.]+%?\))/i;

export interface ColorInputProps extends InputComponent {
  /**
   * A placeholder to show
   */
  placeholder?: string;
  /**
   * Current value of the color input
   */
  value?: string;
  /**
   * Fired when the value is changed
   */
  onChange?: (value: string) => void;
}

type HtmlInputProps = Omit<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
  keyof ColorInputProps
>;

/**
 * The text input accepts any valid css color string as input. Will show a popover color picker on click
 */
export const ColorInput: React.FC<HtmlInputProps & ColorInputProps> = ({
  placeholder,
  className,
  value,
  onChange,
  variant = "dark",
  error,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [internalValue, setInternalValue] = useState<string>();

  useEffect(() => {
    setInternalValue(value);
  }, [value, setInternalValue]);

  const onValueChange = useCallback(
    (newValue: string) => {
      setInternalValue(newValue);
      if (onChange) onChange(newValue);
    },
    [setInternalValue, onChange]
  );

  const onValueChangeDebounce = useMemo(
    () =>
      debounce<(newValue: string) => void>(
        (newValue) => onChange && onChange(newValue),
        100
      ),
    [onChange]
  );

  const onInputFocus = useCallback(() => {
    setIsFocused(true);
  }, [setIsFocused]);

  const onInputBlur = useCallback(() => {
    setIsFocused(false);
  }, [setIsFocused]);

  const onInputChanged = useCallback<
    React.ChangeEventHandler<HTMLInputElement>
  >(
    (e) => {
      onValueChange(e.target.value);
    },
    [onValueChange]
  );

  const onPickerChange = useCallback(
    (newValue: string) => {
      setInternalValue(newValue);
      onValueChangeDebounce(newValue);
    },
    [onValueChangeDebounce]
  );

  return (
    <Popover overlay targetInteractable>
      <div
        className={classNames(
          "rcn-flex rcn-px-4 rcn-py-1 rcn-h-9 rcn-rounded rcn-text-white rcn-border rcn-transition-all rcn-outline-none flex rcn-items-center rcn-cursor-pointer",
          inputVariantColorMap[variant],
          isFocused
            ? "rcn-border-blue-500"
            : error
            ? "rcn-shadow-red rcn-border-red-500"
            : "rcn-shadow rcn-border-dark-2",
          className
        )}
      >
        <div
          className="rcn-w-5 rcn-h-5 rcn-rounded rcn-mr-2 "
          style={{
            backgroundColor: internalValue,
            display: colorRegex.test(internalValue || "")
              ? "inline-block"
              : "none",
          }}
        />
        <input
          placeholder={placeholder}
          value={internalValue}
          type="text"
          onChange={onInputChanged}
          onFocus={onInputFocus}
          onBlur={onInputBlur}
          className={classNames(
            "rcn-text-white rcn-bg-transparent focus:rcn-outline-none rcn-w-full"
          )}
          {...props}
        />
        <MdPalette className="rcn-text-white" />
      </div>
      <SketchPicker
        color={internalValue}
        onChange={(colour) => {
          onPickerChange(colour.hex);
        }}
      />
    </Popover>
  );
};
