import uniqueId from "lodash.uniqueid";
import { CSSProperties, useState } from "react";

export interface Component {
  className?: string;
  style?: CSSProperties;
  "data-testid"?: string;
}

export interface InputComponent extends Component {
  variant?: "dark" | "med";
  error?: boolean;
}

export const inputVariantColorMap: Record<InputComponent["variant"], string> = {
  dark: "bg-dark-0",
  med: "bg-dark-1",
};

export const useUniqueId = (prefix: string): string => {
  const [id] = useState(uniqueId(`${prefix}-`));

  return id;
};
