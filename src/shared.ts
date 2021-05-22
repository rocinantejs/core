import uniqueId from "lodash.uniqueid";
import { CSSProperties, useState } from "react";

export interface Component {
  /**
   * Class name to apply to the component
   */
  className?: string;
  /**
   * Inline styles to apply the the component
   */
  style?: CSSProperties;
  /**
   * Test id to apply to the component
   */
  "data-testid"?: string;
}

export interface InputComponent extends Component {
  variant?: "dark" | "med";
  error?: boolean;
}

export const inputVariantColorMap: Record<InputComponent["variant"], string> = {
  dark: "rcn-bg-dark-0",
  med: "rcn-bg-dark-1",
};

export const useUniqueId = (prefix: string): string => {
  const [id] = useState(uniqueId(`${prefix}-`));

  return id;
};
