import Button from "@/components/Button";
import useStore from "../.hooks/useStore";
import { store } from "../.lib/store";
import RenderCount from "@/components/RenderCount";
const Component1 = () => {
  const [state, setState] = useStore(store);
  const inc1 = () => setState((prev) => ({ ...prev, count: prev.count + 1 }));
  return (
    <div>
      {state.count} <Button onClick={inc1}>+1</Button>
    </div>
  );
};

const Component2 = () => {
  const [state, setState] = useStore(store);
  const inc2 = () => setState((prev) => ({ ...prev, count: prev.count + 2 }));
  return (
    <div>
      {state.count} <Button onClick={inc2}>+2</Button>
    </div>
  );
};

const NameComponent = () => {
  const [state] = useStore(store);
  return (
    <div>
      STORE NAME: <code className="bg-amber-100">{state.name}</code> <RenderCount />
    </div>
  );
};

export default function CreateStoreExample() {
  return (
    <>
      <Component1 />
      <Component2 />
      <NameComponent />
      <img src="https://i.imgur.com/Odz3mOh.png" alt="createStore 예제 코드" />
      <p>
        Module State + Subscription을 좀 더 현실적으로 구현하고자 <code>{`createStore`}</code>함수를 만들었습니다.
      </p>
      <p>
        <code>{`store`}</code>는 내부에 상태값을 유지하고, <code>{`getState, setState, subscribe`}</code>를 메서드로
        가지는 하나의 module state입니다.
      </p>
      <img src="https://i.imgur.com/BMlKRnZ.png" alt="useStore 커스텀훅 예제 코드" />
      <img src="https://i.imgur.com/pZ0gFiu.png" alt="useStore 커스텀훅 사용 예제" />
      <p>
        이제 <code>{`useStore`}</code> 커스텀훅을 사용하여 store 상태값을 구독하여 조회하거나 변경합니다.
      </p>
      <p>
        그러나 <code>{`useStore`}</code>는 상태값 객체 전체를 반환하므로,
        <br />
        객체의 일부만 변한 경우에도 <code>{`useStore`}</code>를 사용하는 모든 컴포넌트가 불필요하게 리렌더링됩니다.
      </p>
    </>
  );
}
