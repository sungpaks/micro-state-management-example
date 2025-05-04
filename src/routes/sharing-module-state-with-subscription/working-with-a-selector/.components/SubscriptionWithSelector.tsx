import Button from "@/components/Button";
import { store } from "../../.lib/store";
import useStoreSelector from "../.hooks/useStoreSelector";
import RenderCount from "@/components/RenderCount";

const selectCount = (state: ReturnType<typeof store.getState>) => state.count;
const selectName = (state: ReturnType<typeof store.getState>) => state.name;

const Component1 = () => {
  const count = useStoreSelector(store, selectCount);
  const inc1 = () => store.setState((prev) => ({ ...prev, count: prev.count + 1 }));
  return (
    <div>
      {count} <Button onClick={inc1}>+1</Button>
    </div>
  );
};

const Component2 = () => {
  const count = useStoreSelector(store, selectCount);
  const inc2 = () => store.setState((prev) => ({ ...prev, count: prev.count + 2 }));
  return (
    <div>
      {count} <Button onClick={inc2}>+2</Button>
    </div>
  );
};

const NameComponent = () => {
  const name = useStoreSelector(store, selectName);
  return (
    <div>
      STORE NAME: <code className="bg-amber-100">{name}</code> <RenderCount />
    </div>
  );
};

export default function SubscriptionWithSelector() {
  return (
    <>
      <Component1 />
      <Component2 />
      <NameComponent />
      <img src="https://i.imgur.com/gNLpZN5.png" alt="useStoreSelector 커스텀훅 예제 코드" />
      <p>
        필요한 값만을 골라 구독할 수 있는 <code>{`useStoreSelector`}</code> 커스텀훅입니다.
        <br />
        <code>{`useStoreSelector`}</code> 커스텀훅은 전체 상태값이 아닌 <code>{`selector`}</code>함수의 반환값만을
        상태로 유지합니다.
      </p>
      <img src="https://i.imgur.com/U8om5o3.png" alt="useStoreSelector 커스텀훅 사용 예제" />
      <p>
        <code>{`selector`}</code>함수는 컴포넌트 외부에 선언하거나 <code>{`useCallback`}</code>으로 감싸줍니다.
        <br />
        그렇지 않으면 컴포넌트가 렌더링될 때마다 매번 <code>{`store`}</code>를 새로 구독하게 됩니다.
      </p>
    </>
  );
}
