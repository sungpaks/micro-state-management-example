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
      <p>상태 값만을 전달하여 자식 컴포넌트에서는 값을 조회만 할 수도 있고,</p>
    </CountContext.Provider>
  );
}

function Counter1() {
  const count = useContext(CountContext);
  return <div>Count: {count}</div>;
}

function Counter2() {
  const count = useContext(CountContext);
  return <div>Count: {count}</div>;
}

export default ContextWithStaticValueExample;
