// Generated with util/create-component.js
import React, { PropsWithChildren } from "react";
import "../tailwind.scss"

export interface ButtonProps {}

const Button: React.FC<PropsWithChildren<ButtonProps>> = ({ children }) => (
  <button
    data-testid="Button"
    className="bg-gradient-to-r from-indigo-500 to-purple-400 via-blue-500 px-4 py-1 rounded text-white transition-all ease-in-out bg-200% hover:bg-right hover:shadow"
  >
    {children}
  </button>
);

export default Button;
