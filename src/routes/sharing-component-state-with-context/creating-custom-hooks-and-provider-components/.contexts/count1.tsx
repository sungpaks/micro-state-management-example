import React, {
  ReactNode,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
  createContext,
} from "react";

type CountContextType = [number, Dispatch<SetStateAction<number>>];

export const Count1Context = createContext<CountContextType | null>(null);

export const Count1Provider = ({ children }: { children: ReactNode }) => {
  return (
    <Count1Context.Provider value={useState(0)}>
      {children}
    </Count1Context.Provider>
  );
};

export function useCount1() {
  const value = useContext(Count1Context);
  if (!value) {
    throw new Error("Provider Missing");
  }
  return value;
}
