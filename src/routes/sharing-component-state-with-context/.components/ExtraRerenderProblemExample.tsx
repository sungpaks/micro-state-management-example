import { createContext, memo, useContext, useState } from "react";
import Button from "@/components/Button";
import RenderCount from "@/components/RenderCount";
import ExampleLink from "@/components/ExampleLink";

function Count1() {
  const { count1 } = useContext(CountContext);
  return (
    <div>
      Count1: {count1}
      <RenderCount />
    </div>
  );
}

function Count2() {
  const { count2 } = useContext(CountContext);
  return (
    <div>
      Count2: {count2}
      <RenderCount />
    </div>
  );
}

const MemoCount1 = memo(Count1);
const MemoCount2 = memo(Count2);

function Parent() {
  return (
    <>
      <MemoCount1 />
      <MemoCount2 />
    </>
  );
}

type CountContextType = {
  count1: number;
  count2: number;
};
const CountContext = createContext<CountContextType>({
  count1: 0,
  count2: 0,
});

export default function ExtraRerenderProblemExample() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  return (
    <CountContext.Provider value={{ count1, count2 }}>
      <Button onClick={() => setCount1(count1 + 1)}>Increment count1</Button>
      <Button onClick={() => setCount2(count2 + 1)}>Increment count2</Button>
      <Parent />
      <br />
      <img src="https://i.imgur.com/ue2ejZl.png" alt="useContext : extra re-render limitations" />
      <p>Context의 값으로 이렇게 객체를 쓰거나 하면 불필요한 리렌더링을 유발할 수 있어요</p>
      <ExampleLink to="/sharing-component-state-with-context/solution1">
        Solution 1: Creating small state pieces
      </ExampleLink>
      <ExampleLink to="/sharing-component-state-with-context/solution2">
        Solution 2: Creating one state with useReducer and propagating multiple Contexts
      </ExampleLink>
    </CountContext.Provider>
  );
}
