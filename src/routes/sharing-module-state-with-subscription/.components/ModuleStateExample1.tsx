import Button from "@/components/Button";
import { useState } from "react";

let count = 10;

const Component1 = () => {
  const [state, setState] = useState(count);
  const inc1 = () => setState(state + 1);
  return (
    <div>
      {state} <Button onClick={inc1}>+1</Button>
    </div>
  );
};

const Component2 = () => {
  const [state, setState] = useState(count);
  const inc2 = () => setState(state + 2);
  return (
    <div>
      {state} <Button onClick={inc2}>+2</Button>
    </div>
  );
};

export default function ModuleStateExample1() {
  return (
    <>
      <Component1 />
      <Component1 />
      <Component2 />
      <img src="https://i.imgur.com/Sc1kqwl.png" alt="Module State 예제: 구독 없는 경우" />
      <p>
        위와 같이 각 컴포넌트들이 <code>{`count`}</code>라는 Module State로 상태를 만들지만, <br />각 상태들은 서로
        독립적이므로 서로의 상태 변화가 공유되지 않습니다.
      </p>
      <p>상태를 공유하기 위한 (아주 단순한) 접근 방법은 setState함수들을 한번에 트리거하는 것입니다.</p>
    </>
  );
}
