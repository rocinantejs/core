import React, { useContext } from "react";

import { Direction } from "./types";

export type MenuContextType = {
  direction: Direction;
};

const MenuContext = React.createContext<MenuContextType>(
  (null as unknown) as MenuContextType
);

export const MenuContextProvider = MenuContext.Provider;

export const useMenuContext = (): MenuContextType => {
  return useContext(MenuContext);
};
