import { CSSProperties } from "react";

export interface Component {
  className?: string;
  style?: CSSProperties;
  "data-testid"?: string;
}

export interface InputComponent extends Component {
  variant?: "dark" | "med";
}

export const inputVariantColorMap: Record<InputComponent["variant"], string> = {
  dark: "bg-dark-0",
  med: "bg-dark-1",
};
