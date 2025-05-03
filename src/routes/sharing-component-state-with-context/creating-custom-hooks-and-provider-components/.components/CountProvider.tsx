import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

type CountContextType = [number, Dispatch<SetStateAction<number>>];

export const CountContext1 = createContext<CountContextType>([0, () => {}]);

export const CountProvider1 = ({ children }: { children: ReactNode }) => {
  return (
    <CountContext1.Provider value={useState(0)}>
      {children}
    </CountContext1.Provider>
  );
};

export function useCount1() {
  const value = useContext(CountContext1);
  if (!value) {
    throw new Error("Provider Missing");
  }
  return value;
}

export const CountContext2 = createContext<CountContextType>([0, () => {}]);

export const CountProvider2 = ({ children }: { children: ReactNode }) => {
  return (
    <CountContext2.Provider value={useState(0)}>
      {children}
    </CountContext2.Provider>
  );
};

export function useCount2() {
  const value = useContext(CountContext2);
  if (!value) {
    throw new Error("Provider Missing");
  }
  return value;
}

export function CountProvider({ children }: { children: ReactNode }) {
  return (
    <CountProvider1>
      <CountProvider2>{children}</CountProvider2>
    </CountProvider1>
  );
}
