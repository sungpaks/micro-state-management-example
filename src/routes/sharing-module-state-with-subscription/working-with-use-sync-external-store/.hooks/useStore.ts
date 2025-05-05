import { useCallback, useSyncExternalStore } from "react";
import { Store } from "../../.lib/store";

const useStore = <T, S>(store: Store<T>, selector: (state: T) => S) => {
  return useSyncExternalStore(
    store.subscribe,
    useCallback(() => selector(store.getState()), [store, selector])
  );
};

export default useStore;
