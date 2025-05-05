import Button from "@/components/Button";
import { createContext, useContext } from "react";

import { useState } from "react";

const CountContext = createContext<number>(0);

function ContextWithStaticValueExample() {
  const [count, setCount] = useState(0);
  return (
    <CountContext.Provider value={count}>
      <Counter1 />
      <Counter2 />
      <Button onClick={() => setCount((c) => c + 1)}>+1</Button>
    </CountContext.Provider>
  );
}

function Counter1() {
  const count = useContext(CountContext);
  return <div>Count1: {count}</div>;
}

function Counter2() {
  const count = useContext(CountContext);
  return <div>Count2: {count}</div>;
}

export default ContextWithStaticValueExample;
