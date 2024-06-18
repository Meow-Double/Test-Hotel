import { createContext } from 'react';

export interface ItemsContextProps {
  items: ItemResponse | undefined;
}

export const ItemsContext = createContext<ItemsContextProps>({
  items: []
});
