// Generated with util/create-component.js
import { MdChevronRight } from "react-icons/md";
import { useSelect } from "downshift";
import classnames from "classnames";
import { usePopper } from "react-popper";

import React from "react";
import "../tailwind.scss";
import { Component } from "../shared";

export interface SelectItem {
  name: string;
  value: string;
}

export interface SelectProps extends Component {
  items: SelectItem[];
  label?: string;
  placeHolder?: string;
  selectedItem?: SelectItem;
  onItemSelected?: (item?: SelectItem) => void;
}

const Select: React.FC<SelectProps> = ({
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
    getItemProps,
  } = useSelect({
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
      <button
        type="button"
        {...getToggleButtonProps({ ref: setReferenceElement })}
        className={classnames(
          "flex px-4 pr-1 py-1 rounded shadow text-white transition-all ease-in-out bg-dark-1 border-dark-2 border hover:bg-opacity-50",
          isOpen && "rounded-b-none"
        )}
      >
        <div className={classnames("flex-1", !selectedItem && "text-gray-400")}>
          {selectedItem?.name || placeHolder || "Select..."}
        </div>
        <MdChevronRight
          className={classnames(
            "self-center  mx-1 transition-all ease-in-out",
            isOpen && "transform rotate-90"
          )}
        />
      </button>
      <div
        ref={setPopperElement}
        style={popperStyles.popper}
        {...attributes.popper}
      >
        <ul
          {...getMenuProps()}
          className={classnames("rounded-b shadow text-white bg-dark-1 border-dark-2 flex flex-col", isOpen && "border")}
        >
          {isOpen &&
            items.map((item, index) => (
              <li
                className="px-4 p-1 transition-all ease-in-out  min-w-full hover:bg-dark-0"
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

export default Select;
