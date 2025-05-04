import { useMemo } from "react";
import { useSubscription } from "use-subscription";
import { store } from "../../.lib/store";
import Button from "@/components/Button";
import RenderCount from "@/components/RenderCount";
import { IconExternalLink } from "@tabler/icons-react";

const Component1 = () => {
  const state = useSubscription(
    useMemo(
      () => ({
        getCurrentValue: () => store.getState().count,
        subscribe: store.subscribe,
      }),
      []
    )
  );
  const inc1 = () => store.setState((prev) => ({ ...prev, count: prev.count + 1 }));
  return (
    <div>
      {state} <Button onClick={inc1}>+1</Button>
    </div>
  );
};

const Component2 = () => {
  const state = useSubscription(
    useMemo(
      () => ({
        getCurrentValue: () => store.getState().count,
        subscribe: store.subscribe,
      }),
      []
    )
  );
  const inc2 = () => store.setState((prev) => ({ ...prev, count: prev.count + 2 }));
  return (
    <div>
      {state} <Button onClick={inc2}>+2</Button>
    </div>
  );
};

const NameComponent = () => {
  const state = useSubscription(
    useMemo(
      () => ({
        getCurrentValue: () => store.getState().name,
        subscribe: store.subscribe,
      }),
      []
    )
  );
  return (
    <div>
      STORE NAME: {state} <RenderCount />
    </div>
  );
};
export default function SubscriptionWithUseSubscription() {
  return (
    <>
      <Component1 />
      <Component2 />
      <NameComponent />
      <img src="https://i.imgur.com/CkpDm2U.png" alt="useSubscription을 사용한 예제" />
      <p>
        React Team에서 공식적으로 제공하는{" "}
        <a href="https://www.npmjs.com/package/use-subscription" target="_blank" className="text-blu-500 underline">
          <IconExternalLink width={16} height={16} className="inline-block" />
          <code>{`useSubscription`}</code> 훅
        </a>
        을 사용합니다.
        <br />이 경우 <code>{`useStoreSelector`}</code> 훅을 사용하지 않고도 직접 <code>{`store`}</code>에서 원하는 값을
        구독할 수 있습니다.
      </p>
    </>
  );
}
