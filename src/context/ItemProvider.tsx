import { PropsWithChildren } from 'react';
import { ItemsContext, ItemsContextProps } from './ItemsContext';

type ItemsProvederProps = ItemsContextProps & PropsWithChildren;

export const ItemsProvider = ({ children, items }: ItemsProvederProps) => {
  return <ItemsContext.Provider value={{ items }}>{children}</ItemsContext.Provider>;
};
