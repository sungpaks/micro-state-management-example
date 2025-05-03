import Button from "@/components/Button";
import ExampleWrapper from "@/components/ExampleWrapper";
import { createFileRoute, Link } from "@tanstack/react-router";
import { createContext, useState } from "react";
import Parent from "./.components/Parent";
import ExampleLink from "@/components/ExampleLink";

export const Route = createFileRoute("/sharing-component-state-with-context/")({
  component: RouteComponent,
});

type CountContextType = {
  count1: number;
  count2: number;
};
export const CountContext = createContext<CountContextType>({
  count1: 0,
  count2: 0,
});

function RouteComponent() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <CountContext.Provider value={{ count1, count2 }}>
      <ExampleWrapper title="useContext : extra re-render limitations">
        <div>
          <code>
            {`
            export const CountContext = createContext({
  count1: 0,
  count2: 0,
});
            `}
          </code>
        </div>
        <Button onClick={() => setCount1(count1 + 1)}>Increment count1</Button>
        <Button onClick={() => setCount2(count2 + 1)}>Increment count2</Button>
        <Parent />
        <br />
        <p>
          Context의 값으로 이렇게 객체를 쓰거나 하면 불필요한 리렌더링을 유발할
          수 있어요
        </p>
        <ExampleLink to="/sharing-component-state-with-context/solution1">
          Solution 1: Creating small state pieces
        </ExampleLink>
        <ExampleLink to="/sharing-component-state-with-context/solution2">
          Solution 2: Creating one state with useReducer and propagating
          multiple Contexts
        </ExampleLink>
      </ExampleWrapper>

      <ExampleWrapper title="Best practices for using Context">
        Context를 잘 사용하는 잡기술들
        <ExampleLink to="/sharing-component-state-with-context/creating-custom-hooks-and-provider-components">
          Creating custom hooks and provider components
        </ExampleLink>
      </ExampleWrapper>
    </CountContext.Provider>
  );
}
