import React, { createContext, Dispatch, useReducer } from "react";

type Action =
  | {
      type: "INC1";
    }
  | {
      type: "INC2";
    };

export const Count1Context = createContext(0);
export const Count2Context = createContext(0);
export const DispatchContext = createContext<Dispatch<Action>>(() => {});

export default function Provider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(
    (prev: { count1: number; count2: number }, action: Action) => {
      if (action.type === "INC1") {
        return {
          ...prev,
          count1: prev.count1 + 1,
        };
      }
      if (action.type === "INC2") {
        return {
          ...prev,
          count2: prev.count2 + 1,
        };
      }
      throw new Error("no matching action");
    },
    { count1: 0, count2: 0 }
  );

  return (
    <Count1Context.Provider value={state.count1}>
      <Count2Context.Provider value={state.count2}>
        <DispatchContext.Provider value={dispatch}>
          {children}
        </DispatchContext.Provider>
      </Count2Context.Provider>
    </Count1Context.Provider>
  );
}
