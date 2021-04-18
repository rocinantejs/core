/* eslint-disable jsx-a11y/label-has-associated-control */
import "../tailwind.scss";

import classNames from "classnames";
import { useCombobox } from "downshift";
import React from "react";
import { MdChevronRight } from "react-icons/md";
import { usePopper } from "react-popper";

import { Component } from "../shared";
import { Skeleton, useSkeletonContext } from "../Skeleton";

export interface ComboboxItem {
  name: string;
  value: string;
}

export interface ComboboxProps extends Component {
  items: ComboboxItem[];
  label?: string;
  placeHolder?: string;
  selectedItem?: ComboboxItem;
  onItemSelected?: (item?: ComboboxItem) => void;
}

export const Combobox: React.FC<ComboboxProps> = ({
  items,
  label,
  className,
  selectedItem: selectedItemProp,
  onItemSelected,
  placeHolder,
  ...props
}) => {
  const {
    isOpen,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    getItemProps,
  } = useCombobox({
    items,
    itemToString: (item) => item.name,
    selectedItem: selectedItemProp,
    onSelectedItemChange: (changes) =>
      onItemSelected && onItemSelected(changes.selectedItem),
  });

  const [referenceElement, setReferenceElement] = React.useState(null);
  const [popperElement, setPopperElement] = React.useState(null);

  const { styles: popperStyles, attributes } = usePopper(
    referenceElement,
    popperElement,
    {
      placement: "bottom-start",
    }
  );

  const { showSkeleton } = useSkeletonContext();

  if (showSkeleton) {
    return (
      <Skeleton
        className={classNames("inline-block h-9 w-48 rounded", className)}
      />
    );
  }

  return (
    <div {...props}>
      {label && <label {...getLabelProps()}>{label}</label>}
      <div {...getComboboxProps()}>
        <button
          type="button"
          {...getToggleButtonProps({ ref: setReferenceElement })}
          className={classNames(
            "flex px-4 pr-1 py-1 h-9 rounded shadow text-white transition-all ease-in-out bg-dark-1 border-dark-2 border hover:bg-opacity-50",
            isOpen && "rounded-b-none"
          )}
        >
          <input {...getInputProps()} className="bg-transparent" />
          <MdChevronRight
            className={classNames(
              "self-center  mx-1 transition-all ease-in-out",
              isOpen && "transform rotate-90"
            )}
          />
        </button>
      </div>
      <div
        ref={setPopperElement}
        style={popperStyles.popper}
        {...attributes.popper}
      >
        <ul
          {...getMenuProps()}
          className={classNames(
            "rounded-b shadow text-white bg-dark-1 border-dark-2 flex flex-col",
            isOpen && "border"
          )}
        >
          {isOpen &&
            items.map((item, index) => (
              <li
                className="px-4 p-1 transition-all ease-in-out  min-w-full hover:bg-dark-0"
                // eslint-disable-next-line react/no-array-index-key
                key={`${item}${index}`}
                {...getItemProps({ item, index })}
              >
                {item.name}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};
