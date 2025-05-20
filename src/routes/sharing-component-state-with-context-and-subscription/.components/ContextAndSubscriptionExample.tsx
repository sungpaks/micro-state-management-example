import Button from "@/components/Button";
import RenderCount from "@/components/RenderCount";
import { createStore, Store } from "@/routes/sharing-module-state-with-subscription/.lib/store";
import { createContext, useCallback, useContext, useRef, useSyncExternalStore } from "react";

type State = { count: number; text?: string };

const StoreContext = createContext<Store<State>>(createStore<State>({ count: 0, text: "Using default store" }));

const StoreProvider = ({ initialState, children }: { initialState: State; children: React.ReactNode }) => {
  const storeRef = useRef<Store<State>>(null);
  if (!storeRef.current) {
    storeRef.current = createStore(initialState);
  }
  return <StoreContext.Provider value={storeRef.current}>{children}</StoreContext.Provider>;
};

const useSelector = <S extends unknown>(selector: (state: State) => S) => {
  const store = useContext(StoreContext);
  return useSyncExternalStore(
    store.subscribe,
    useCallback(() => selector(store.getState()), [selector, store])
  );
};

const useSetState = () => {
  const store = useContext(StoreContext);
  return store.setState;
};

const selectCount = (state: State) => state.count;
const selectText = (state: State) => state.text;

const CountComponent = () => {
  const count = useSelector(selectCount);
  const setCount = useSetState();
  const inc = () => {
    setCount((prev) => ({ ...prev, count: prev.count + 1 }));
  };
  return (
    <div>
      count: {count} <RenderCount />
      <Button onClick={inc}>+1</Button>
    </div>
  );
};

const TextComponent = () => {
  const text = useSelector(selectText);
  return (
    <h3 className="text-lg font-semibold">
      <li>
        {text} <RenderCount />
      </li>
    </h3>
  );
};

export default function ContextAndSubscriptionExample() {
  return (
    <>
      <br />
      <TextComponent />
      <CountComponent />
      <br />
      <StoreProvider initialState={{ count: 10, text: "Using store provider" }}>
        <TextComponent />
        <CountComponent />
        <br />
        <StoreProvider initialState={{ count: 20, text: "Using inner store provider" }}>
          <TextComponent />
          <CountComponent />
        </StoreProvider>
      </StoreProvider>
    </>
  );
}
