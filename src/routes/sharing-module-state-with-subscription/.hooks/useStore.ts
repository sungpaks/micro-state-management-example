import { useEffect, useState } from "react";
import { Store } from "../.lib/store";

function useStore<T extends unknown>(store: Store<T>) {
  const [state, setState] = useState(store.getState());
  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setState(store.getState());
    });

    // 중요! useEffect는 나중에 실행되므로 store가 이미 새 상태값을 가지고 있을 수 있음. 이러한 엣지케이스를 커버하기 위함
    setState(store.getState());

    return unsubscribe;
  }, [store]);
  return [state, store.setState] as const;
}

export default useStore;
