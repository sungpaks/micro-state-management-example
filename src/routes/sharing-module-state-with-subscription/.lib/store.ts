export type Store<T> = {
  getState: () => T;
  setState: (action: T | ((prev: T) => T)) => void;
  subscribe: (callback: () => void) => () => void;
};

const createStore = <T extends unknown>(initialState: T): Store<T> => {
  let state = initialState;
  const callbacks = new Set<() => void>();

  const getState = () => state;

  const setState = (nextState: T | ((prev: T) => T)) => {
    state = typeof nextState === "function" ? (nextState as (prev: T) => T)(state) : nextState;
    callbacks.forEach((callback) => callback());
  };

  const subscribe = (callback: () => void) => {
    callbacks.add(callback);
    return () => callbacks.delete(callback);
  };

  return { getState, setState, subscribe };
};

const store = createStore({
  name: "COUNT",
  count: 10,
});

export { createStore, store };
