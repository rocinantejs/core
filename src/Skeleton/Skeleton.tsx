// Generated with util/create-component.js
import "../tailwind.scss";
import "./Skeleton.scss";

import classnames from "classnames";
import React, { createContext, useContext } from "react";

import { Component } from "../shared";

export interface SkeletonProps extends Component {
  width?: string;
  height?: string;
}

const Skeleton: React.FC<SkeletonProps> = ({
  width,
  height,
  className,
  children,
  ...props
}) => (
  <div
    className={classnames(
      "skeleton-box relative overflow-hidden bg-dark-2",
      className
    )}
    style={{ width, height }}
    {...props}
  >
    {children}
  </div>
);

export default Skeleton;

export const SkeletonContext = createContext({ showSkeleton: false });

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useSkeletonContext = () => useContext(SkeletonContext);
