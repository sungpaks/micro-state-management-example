import Button from "@/components/Button";
import ExampleWrapper from "@/components/ExampleWrapper";
import { createFileRoute, Link } from "@tanstack/react-router";
import { createContext, useState } from "react";
import Parent from "./.components/Parent";

export const Route = createFileRoute(
  "/use-context-extra-re-render-limitations/"
)({
  component: RouteComponent,
});

export const CountContext = createContext<{ count1: number; count2: number }>({
  count1: 0,
  count2: 0,
});

function RouteComponent() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <CountContext.Provider value={{ count1, count2 }}>
      <ExampleWrapper title="useContext : extra re-render limitations">
        <Button onClick={() => setCount1(count1 + 1)}>Increment count1</Button>
        <Button onClick={() => setCount2(count2 + 1)}>Increment count2</Button>
        <Parent />
      </ExampleWrapper>

      <div className="p-4 mt-8">
        <Link to="/use-context-extra-re-render-limitations/solution2">
          {">"} Solution 2 {"<"}
        </Link>
      </div>
    </CountContext.Provider>
  );
}
