import { ReactNode, useContext, useState, createContext, Dispatch, SetStateAction } from "react";

type CountContextType = [number, Dispatch<SetStateAction<number>>];

export const Count2Context = createContext<CountContextType | null>(null);

export const Count2Provider = ({ children }: { children: ReactNode }) => {
  return <Count2Context.Provider value={useState(0)}>{children}</Count2Context.Provider>;
};

export function useCount2() {
  const value = useContext(Count2Context);
  if (!value) {
    throw new Error("Provider Missing");
  }
  return value;
}
