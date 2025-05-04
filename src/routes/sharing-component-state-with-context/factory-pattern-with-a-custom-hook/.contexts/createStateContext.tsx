import { createContext, ReactNode, useContext } from "react";

// 이 팩토리 함수는 어느 위치가 적당할지..
const createStateContext = <Value, State>(
  useValue: (init?: Value) => State // 값(init)을 받아 상태(state)를 반환하는 훅만 전달하면 됨.
  // ex: (0) => useState(0), ()=>useReducer(reducer, initialState),
) => {
  // Context 생성
  const StateContext = createContext<State | null>(null);

  // Provider 컴포넌트 생성
  const StateProvider = ({
    initialValue, // useValue훅의 초기값 (optional)
    children,
  }: {
    initialValue?: Value;
    children: ReactNode;
  }) => <StateContext.Provider value={useValue(initialValue)}>{children}</StateContext.Provider>;

  // Context의 값을 뱉는 커스텀훅
  const useContextState = () => {
    const value = useContext(StateContext);
    if (!value) {
      throw new Error("Provider Missing");
    }
    return value;
  };

  return [StateProvider, useContextState] as const;
};

export default createStateContext;
