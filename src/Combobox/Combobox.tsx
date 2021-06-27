/* eslint-disable jsx-a11y/label-has-associated-control */
import "../tailwind.scss";

import classNames from "classnames";
import { useCombobox } from "downshift";
import React, { useCallback, useMemo, useState } from "react";
import { MdChevronRight } from "react-icons/md";
import { usePopper } from "react-popper";

import { InputComponent, inputVariantColorMap } from "../shared";
import { Skeleton, useSkeletonContext } from "../Skeleton";

export interface ComboboxItem {
  /**
   * The name of the item
   */
  name: string;
  /**
   * The value of the item
   */
  value: string;
}

export interface ComboboxProps extends InputComponent {
  /**
   * A list of items to show in the combobox
   */
  items: ComboboxItem[];
  /**
   * A placeholder to show
   */
  placeHolder?: string;
  /**
   * The currently selected item
   */
  selectedItem?: ComboboxItem;
  /**
   * Fires when an item is selected
   */
  onItemSelected?: (item?: ComboboxItem) => void;
  /**
   * Extra props to pass to the input component
   */
  inputProps?: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
  /**
   * Controls if the user is allowed to enter a new value
   */
  allowNewValue?: boolean;
  /**
   * Controls if the items are filtered by input
   */
  filter?: boolean;
  /**
   * Shows and allows the selection of an empty value
   */
  showEmptyItem?: boolean;
  /**
   * The size of the button
   */
  size?: "normal" | "small";
}

/**
 * The combobox element is a select componet where a user can also type a value not present in the existing list
 *
 * Will display as a skeleton when inside an active skeleton context.
 *
 * Can show an error state when passed the error prop.
 */
export const Combobox: React.FC<ComboboxProps> = ({
  items,
  className,
  selectedItem: selectedItemProp,
  onItemSelected,
  placeHolder,
  variant = "dark",
  size = "normal",
  error,
  allowNewValue = false,
  inputProps,
  filter = true,
  showEmptyItem,
  ...props
}) => {
  const [itemFilter, setItemFilter] = useState<string | undefined>();
  const filteredItems = useMemo(() => {
    const newItems = filter
      ? items.filter((i) =>
          i.name.toLowerCase().includes(itemFilter?.toLowerCase() || "")
        )
      : [...items];

    if (
      allowNewValue &&
      itemFilter &&
      items.every((i) => i.name !== itemFilter)
    ) {
      newItems.unshift({ name: itemFilter, value: itemFilter });
    }

    return newItems;
  }, [items, itemFilter, allowNewValue, filter]);

  const internalItems = useMemo<(ComboboxItem | null)[]>(() => {
    if (showEmptyItem) {
      return [null, ...filteredItems];
    }
    return filteredItems;
  }, [showEmptyItem, filteredItems]);

  const {
    isOpen,
    getToggleButtonProps,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    getItemProps,
    selectItem,
    selectedItem,
    highlightedIndex,
  } = useCombobox({
    items: internalItems,
    initialSelectedItem: selectedItemProp,
    itemToString: (item) => item?.name || "",
    onSelectedItemChange: (changes) =>
      onItemSelected && onItemSelected(changes.selectedItem || undefined),
    onInputValueChange: ({ inputValue }) => setItemFilter(inputValue),
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

  const onInputKeyDown = useCallback<
    React.KeyboardEventHandler<HTMLInputElement>
  >(
    (e) => {
      if (e.key === "Enter" && allowNewValue && itemFilter) {
        selectItem({ name: itemFilter, value: itemFilter });
      }
    },
    [allowNewValue, itemFilter, selectItem]
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
    <div {...getComboboxProps()} className="rcn-flex rcn-outline-none">
      <button
        type="button"
        {...getToggleButtonProps({ ref: setReferenceElement })}
        className={classNames(
          "rcn-flex rcn-flex-1 rcn-pr-1 rcn-rounded rcn-text-white rcn-transition-all rcn-ease-in-out rcn-border hover:rcn-bg-opacity-50 rcn-outline-none focus:rcn-outline-none",
          inputVariantColorMap[variant],
          stateMap[error ? "error" : "default"][isOpen ? "open" : "default"],
          size === "normal"
            ? "rcn-px-4 rcn-py-1 rcn-h-9 rcn-text-base"
            : "rcn-px-2 rcn-h-6 rcn-text-sm",
          className
        )}
        {...props}
      >
        <input
          {...inputProps}
          {...getInputProps()}
          className="rcn-bg-transparent rcn-flex-1 rcn-outline-none rcn-w-full"
          placeholder={placeHolder}
          autoComplete="off"
          onKeyDown={(e) => {
            onInputKeyDown(e);
            if (inputProps && inputProps.onKeyDown) inputProps?.onKeyDown(e);
          }}
        />
        <MdChevronRight
          className={classNames(
            "rcn-self-center rcn-mx-1 rcn-transition-all rcn-ease-in-out",
            isOpen && "rcn-transform rcn-rotate-90"
          )}
        />
      </button>
      <div
        ref={setPopperElement}
        style={{
          ...popperStyles.popper,
          minWidth: referenceElement?.scrollWidth,
        }}
        {...attributes.popper}
        className="rcn-z-10"
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
            internalItems.map((item, index) => (
              <li
                className={classNames(
                  "rcn-px-4 rcn-p-1 rcn-transition-all rcn-ease-in-out  rcn-min-w-full",
                  item?.value === selectedItem?.value && "rcn-bg-dark-2",
                  highlightedIndex === index && "rcn-bg-dark-3"
                )}
                // eslint-disable-next-line react/no-array-index-key
                key={`${item}${index}`}
                {...getItemProps({ item, index })}
              >
                {item?.name || (
                  <div className="rcn-text-dark-4 rcn-italic">
                    Select an option...
                  </div>
                )}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};
