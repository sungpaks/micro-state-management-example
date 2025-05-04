import ExampleWrapper from "@/components/ExampleWrapper";
import { createFileRoute } from "@tanstack/react-router";
import { createContext, ReactNode, useContext } from "react";

export const Route = createFileRoute(
  "/sharing-component-state-with-context/factory-pattern-with-a-custom-hook/"
)({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <ExampleWrapper title="Factory pattern with a custom hook">
      <h1>
        직전에 살펴본 커스텀 훅과 Provider 컴포넌트의 생성을 Factory Pattern으로
        자동화합니다.
      </h1>
    </ExampleWrapper>
  );
}

// 이 팩토리 함수는 어느 위치가 적당할지..
export const createStateContext = <Value, State>(
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
  }) => (
    <StateContext.Provider value={useValue(initialValue)}>
      {children}
    </StateContext.Provider>
  );

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
