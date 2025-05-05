import Button from "@/components/Button";
import { SetStateAction, createContext, useContext, useState } from "react";

const CountStateContext = createContext({ count: 0, setCount: (_: SetStateAction<number>) => {} });

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <CountStateContext.Provider value={{ count, setCount }}>
      <Parent />
    </CountStateContext.Provider>
  );
};

const Parent = () => (
  <>
    <Component1 />
    <Component2 />
    <p>
      <code>{`useState`}</code>튜플을 전달하여 자식 컴포넌트에서 상태를 변경까지 가능하게 할 수도 있습니다.
    </p>
  </>
);

const Component1 = () => {
  const { count, setCount } = useContext(CountStateContext);
  return (
    <div>
      Count: {count} <Button onClick={() => setCount((c) => c + 1)}>+1</Button>
    </div>
  );
};

const Component2 = () => {
  const { count, setCount } = useContext(CountStateContext);
  return (
    <div>
      Count: {count} <Button onClick={() => setCount((c) => c + 2)}>+2</Button>
    </div>
  );
};

export default App;
