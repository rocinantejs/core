/* eslint-disable jsx-a11y/label-has-associated-control */
import "../tailwind.scss";

import classNames from "classnames";
import { useSelect } from "downshift";
import React from "react";
import { MdChevronRight } from "react-icons/md";
import { usePopper } from "react-popper";

import { InputComponent, inputVariantColorMap } from "../shared";
import { Skeleton, useSkeletonContext } from "../Skeleton";

export interface SelectItem {
  name: string;
  value: string;
}

export interface SelectProps extends InputComponent {
  items: SelectItem[];
  placeHolder?: string;
  selectedItem?: SelectItem;
  onItemSelected?: (item?: SelectItem) => void;
}

export const Select: React.FC<SelectProps> = ({
  items,
  className,
  selectedItem: selectedItemProp,
  onItemSelected,
  placeHolder,
  variant = "dark",
  error,
  ...props
}) => {
  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
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

  const { showSkeleton } = useSkeletonContext();

  if (showSkeleton) {
    return (
      <Skeleton
        className={classNames("inline-block h-9 w-48 rounded", className)}
      />
    );
  }

  return (
    <button
      type="button"
      {...getToggleButtonProps({ ref: setReferenceElement })}
      className={classNames(
        "flex px-4 pr-1 py-1 h-9 rounded text-white transition-all ease-in-out border hover:bg-opacity-50",
        inputVariantColorMap[variant],
        error
          ? "shadow-red border-red-500"
          : "shadow border-dark-2 focus:border-blue-500",
        isOpen && "rounded-b-none",
        className
      )}
      {...props}
    >
      <div
        className={classNames(
          "flex-1 text-justify",
          !selectedItem && "text-gray-400 "
        )}
      >
        {selectedItem?.name || placeHolder || "Select..."}
      </div>
      <MdChevronRight
        className={classNames(
          "self-center  mx-1 transition-all ease-in-out",
          isOpen && "transform rotate-90"
        )}
      />
      <div
        ref={setPopperElement}
        style={{
          ...popperStyles.popper,
          minWidth: referenceElement?.scrollWidth,
        }}
        {...attributes.popper}
      >
        <ul
          {...getMenuProps()}
          className={classNames(
            "rounded-b shadow text-white border-dark-2 flex flex-col",
            inputVariantColorMap[variant],
            isOpen && "border"
          )}
        >
          {isOpen &&
            items.map((item, index) => (
              <li
                className="px-4 p-1 transition-all ease-in-out min-w-full hover:bg-dark-3 text-justify"
                // eslint-disable-next-line react/no-array-index-key
                key={`${item}${index}`}
                {...getItemProps({ item, index })}
              >
                {item.name}
              </li>
            ))}
        </ul>
      </div>
    </button>
  );
};
