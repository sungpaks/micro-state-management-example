import Button from "@/components/Button";
import ExampleWrapper from "@/components/ExampleWrapper";
import { createFileRoute } from "@tanstack/react-router";
import { createContext, Dispatch, useReducer } from "react";

export const Route = createFileRoute(
  "/use-context-extra-re-render-limitations/solution2/"
)({
  component: RouteComponent,
});

type Action =
  | {
      type: "INC1";
    }
  | {
      type: "INC2";
    };

const Count1Context = createContext(0);
const Count2Context = createContext(0);
const DispatchContext = createContext<Dispatch<Action>>(() => {});
function RouteComponent() {
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
    <ExampleWrapper title="Creating one state with useReducer and propagating with multiple Contexts">
      <Count1Context.Provider value={state.count1}>
        <Count2Context.Provider value={state.count2}>
          <DispatchContext.Provider value={dispatch}>
            <Button onClick={() => dispatch({ type: "INC1" })}>
              Increment count1
            </Button>
            <Button onClick={() => dispatch({ type: "INC2" })}>
              Increment count2
            </Button>
          </DispatchContext.Provider>
        </Count2Context.Provider>
      </Count1Context.Provider>
    </ExampleWrapper>
  );
}
