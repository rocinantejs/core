// Generated with util/create-component.js
import { MdChevronRight } from "react-icons/md";
import { useCombobox } from "downshift";
import classnames from "classnames";
import { usePopper } from "react-popper";

import React from "react";
import "../tailwind.scss";
import { Component } from "../shared";

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

const Combobox: React.FC<ComboboxProps> = ({
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
    selectedItem,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
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

  return (
    <div {...props}>
      {label && <label {...getLabelProps()}>{label}</label>}
      <div {...getComboboxProps()}>
        <button
          type="button"
          {...getToggleButtonProps({ ref: setReferenceElement })}
          className={classnames(
            "flex px-4 pr-1 py-1 rounded shadow text-white transition-all ease-in-out bg-black bg-opacity-25 hover:bg-opacity-50",
            isOpen && "rounded-b-none"
          )}
        >
          <input {...getInputProps()} className="bg-transparent" />
          <MdChevronRight
            className={classnames(
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
          className="rounded-b shadow text-white bg-black bg-opacity-25 flex flex-col "
        >
          {isOpen &&
            items.map((item, index) => (
              <li
                className="px-4 p-1 transition-all ease-in-out  min-w-full hover:bg-black hover:bg-opacity-25"
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

export default Combobox;
