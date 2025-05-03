import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

type CountContextType = [number, Dispatch<SetStateAction<number>>];

export const CountContext1 = createContext<CountContextType>([0, () => {}]);
export const CountContext2 = createContext<CountContextType>([0, () => {}]);
export function Provider1({ children }: { children: React.ReactNode }) {
  const [count1, setCount1] = useState(0);
  return (
    <CountContext1.Provider value={[count1, setCount1]}>
      {children}
    </CountContext1.Provider>
  );
}

export function Provider2({ children }: { children: React.ReactNode }) {
  const [count2, setCount2] = useState(0);
  return (
    <CountContext2.Provider value={[count2, setCount2]}>
      {children}
    </CountContext2.Provider>
  );
}

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <Provider1>
      <Provider2>{children}</Provider2>
    </Provider1>
  );
}
