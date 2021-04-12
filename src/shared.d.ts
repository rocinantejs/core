import { CSSProperties } from "react";

export interface Component {
  className?: string;
  style?: CSSProperties;
  "data-testid"?: string;
}
