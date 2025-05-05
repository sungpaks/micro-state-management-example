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
  </>
);

const Component1 = () => {
  const { count, setCount } = useContext(CountStateContext);
  return (
    <div>
      {count} <Button onClick={() => setCount((c) => c + 1)}>+1</Button>
    </div>
  );
};

const Component2 = () => {
  const { count, setCount } = useContext(CountStateContext);
  return (
    <div>
      {count} <Button onClick={() => setCount((c) => c + 2)}>+2</Button>
    </div>
  );
};

export default App;
