import type { PropsWithChildren } from 'react';
import { createContext, useState } from 'react';

interface SortContextValues {
  activeItem: string;
  setActiveItem: any;
}

export const SortContext: React.Context<SortContextValues> = createContext({
  activeItem: '',
  setActiveItem: () => {}
});

export const SortContextProvider = ({ children }: PropsWithChildren) => {
  const [activeItem, setActiveItem] = useState('-title');

  return (
    <SortContext.Provider value={{ activeItem, setActiveItem }}>{children}</SortContext.Provider>
  );
};
