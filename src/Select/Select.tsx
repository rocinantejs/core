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
  /**
   * The name of the item
   */
  name: string;
  /**
   * The value of the item
   */
  value: string;
}

export interface SelectProps extends InputComponent {
  /**
   * A list of items to show in the select
   */
  items: SelectItem[];
  /**
   * A placeholder to show
   */
  placeHolder?: string;
  /**
   * The currently selected item
   */
  selectedItem?: SelectItem;
  /**
   * Fires when an item is selected
   */
  onItemSelected?: (item?: SelectItem) => void;
}

/**
 * The select element lets a user pick from a predefined list of values
 *
 * Will display as a skeleton when inside an active skeleton context.
 *
 * Can show an error state when passed the error prop.
 */
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
    itemToString: (item) => item?.name || "",
    selectedItem: selectedItemProp,
    onSelectedItemChange: (changes) =>
      onItemSelected && onItemSelected(changes.selectedItem || undefined),
  });

  const [
    referenceElement,
    setReferenceElement,
  ] = React.useState<HTMLButtonElement | null>(null);
  const [
    popperElement,
    setPopperElement,
  ] = React.useState<HTMLDivElement | null>(null);

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
        className={classNames(
          "rcn-inline-block rcn-h-9 rcn-w-48 rcn-rounded",
          className
        )}
      />
    );
  }

  const stateMap = {
    error: {
      open:
        "rcn-shadow rcn-rounded-b-none rcn-rounded-t-none rcn-border-blue-500",
      default: "rcn-shadow-red rcn-border-red-500",
    },
    default: {
      open:
        "rcn-shadow rcn-rounded-b-none rcn-rounded-t-none rcn-border-blue-500",
      default: "rcn-border-dark-2 rcn-shadow focus:rcn-border-blue-500",
    },
  };

  return (
    <button
      type="button"
      {...getToggleButtonProps({ ref: setReferenceElement })}
      className={classNames(
        "rcn-flex rcn-px-4 rcn-pr-1 rcn-py-1 rcn-h-9 rcn-rounded rcn-text-white rcn-transition-all rcn-ease-in-out rcn-border hover:rcn-bg-opacity-50 rcn-outline-none focus:rcn-outline-none",
        inputVariantColorMap[variant],
        stateMap[error ? "error" : "default"][isOpen ? "open" : "default"],
        className
      )}
      {...props}
    >
      <div
        className={classNames(
          "rcn-flex-1 rcn-text-justify rcn-outline-none",
          !selectedItem && "rcn-text-gray-400"
        )}
      >
        {selectedItem?.name || placeHolder || "Select..."}
      </div>
      <MdChevronRight
        className={classNames(
          "rcn-self-center  rcn-mx-1 rcn-transition-all rcn-ease-in-out",
          isOpen && "rcn-transform rcn-rotate-90"
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
            "rcn-rounded-b rcn-shadow rcn-text-white rcn-border-dark-2 rcn-flex rcn-flex-col",
            inputVariantColorMap[variant],
            isOpen && "rcn-border"
          )}
        >
          {isOpen &&
            items.map((item, index) => (
              <li
                className="rcn-px-4 rcn-p-1 rcn-transition-all rcn-ease-in-out rcn-min-w-full hover:rcn-bg-dark-3 rcn-text-justify"
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
