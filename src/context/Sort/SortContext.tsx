import { PropsWithChildren, createContext, useState } from "react";

// interface SortContextValues {
//     activeItem:string,
// }



export const SortContext: React.Context<any> = createContext({
    activeItem: "",
})

export function SortContextProvider({ children }: PropsWithChildren) {
    const [activeItem, setActiveItem] = useState("-title")

    return (
      <SortContext.Provider value={{ activeItem,  setActiveItem}}>
        {children}
      </SortContext.Provider>
    );
  }
  