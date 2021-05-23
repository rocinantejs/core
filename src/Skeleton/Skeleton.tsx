import "../tailwind.scss";
import "./Skeleton.scss";

import classNames from "classnames";
import React, { createContext, useContext } from "react";

import { Component } from "../shared";

export interface SkeletonProps extends Component {
  /**
   * Width of the skeleton, accepts valid css width values.
   */
  width?: string;
  /**
   * Height of the skeleton, accepts valid css height values.
   */
  height?: string;
}

/**
 * The skeleton component should be used in palce of other elements when a loading state effects their contents
 */
export const Skeleton: React.FC<SkeletonProps> = ({
  width,
  height,
  className,
  children,
  ...props
}) => (
  <div
    className={classNames(
      "skeleton-box rcn-relative rcn-overflow-hidden rcn-bg-dark-2",
      className
    )}
    style={{ width, height }}
    {...props}
  >
    {children}
  </div>
);

export const SkeletonContext = createContext({ showSkeleton: false });

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useSkeletonContext = () => useContext(SkeletonContext);
