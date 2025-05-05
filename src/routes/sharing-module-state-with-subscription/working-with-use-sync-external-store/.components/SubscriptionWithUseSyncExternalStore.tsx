import { IconZoomQuestion } from "@tabler/icons-react";
import { store } from "../../.lib/store";
import useStore from "../.hooks/useStore";
import Button from "@/components/Button";
import RenderCount from "@/components/RenderCount";

const selectCount = (state: ReturnType<typeof store.getState>) => state.count;
const selectName = (state: ReturnType<typeof store.getState>) => state.name;

const Component1 = () => {
  const count = useStore(store, selectCount);
  const inc1 = () => store.setState((prev) => ({ ...prev, count: prev.count + 1 }));
  return (
    <div>
      {count} <Button onClick={inc1}>+1</Button>
    </div>
  );
};

const Component2 = () => {
  const count = useStore(store, selectCount);
  const inc2 = () => store.setState((prev) => ({ ...prev, count: prev.count + 2 }));
  return (
    <div>
      {count} <Button onClick={inc2}>+2</Button>
    </div>
  );
};

const NameComponent = () => {
  const name = useStore(store, selectName);
  return (
    <div>
      STORE NAME: <code className="bg-amber-100">{name}</code> <RenderCount />
    </div>
  );
};

export default function SubscriptionWithUseSyncExternalStore() {
  return (
    <>
      <Component1 />
      <Component2 />
      <NameComponent />
      <img src="https://i.imgur.com/9Ev2FuJ.png" alt="useSyncExternalStore를 사용한 예제" />
      <p>
        React 18에서 추가된 <code>{`useSyncExternalStore`}</code> 훅을 사용하여 모듈 상태를 구독할 수 있습니다.
      </p>
      <p>
        React 18+ 동시성 렌더링에서 External Store를 사용할 때 발생할 수 있는 <b>tearing 현상</b>을 방지합니다.
      </p>
      <p>
        <IconZoomQuestion width={16} height={16} className="inline-block" />
        <a
          href="https://github.com/reactwg/react-18/discussions/69"
          target="_blank"
          className="text-blue-500 underline"
        >
          tearing 현상이란? (by React 18 WG Discussion)
        </a>
      </p>
    </>
  );
}
