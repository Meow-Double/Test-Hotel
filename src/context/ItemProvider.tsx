import type { PropsWithChildren } from 'react';

import type { ItemsContextProps } from './ItemsContext';
import { ItemsContext } from './ItemsContext';

type ItemsProvederProps = ItemsContextProps & PropsWithChildren;

export const ItemsProvider = ({ children, items }: ItemsProvederProps) => {
  return <ItemsContext.Provider value={{ items }}>{children}</ItemsContext.Provider>;
};
