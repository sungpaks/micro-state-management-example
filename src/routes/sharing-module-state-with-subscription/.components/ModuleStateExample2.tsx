import Button from "@/components/Button";
import { useEffect, useState } from "react";

let count = 10;
const setStateFunctions = new Set<(count: number) => void>();

const Component1 = () => {
  const [state, setState] = useState(count);
  useEffect(() => {
    setStateFunctions.add(setState);
    return () => {
      setStateFunctions.delete(setState);
    };
  }, []);
  const inc1 = () => {
    count += 1;
    setStateFunctions.forEach((fn) => fn(count));
  };
  return (
    <div>
      {state} <Button onClick={inc1}>+1</Button>
    </div>
  );
};

const Component2 = () => {
  const [state, setState] = useState(count);
  useEffect(() => {
    setStateFunctions.add(setState);
    return () => {
      setStateFunctions.delete(setState);
    };
  }, []);
  const inc2 = () => {
    count += 2;
    setStateFunctions.forEach((fn) => fn(count));
  };
  return (
    <div>
      {state} <Button onClick={inc2}>+2</Button>
    </div>
  );
};

export default function ModuleStateExample2() {
  return (
    <>
      <Component1 />
      <Component1 />
      <Component2 />
      <img src="https://i.imgur.com/rVipLIl.png" alt="Module State 예제: 아주 naive한 구독 예시" />
      <p>
        예컨대 위와 같이 <code>{`setState`}</code> 함수들을 모아두고,
        <br /> 상태 업데이트 시 이를 모두 트리거합니다.
      </p>
      <p>그러나 이 방법은 그다지 현실적이진 않습니다. 반복적인 코드가 너무 많네요.</p>
    </>
  );
}
