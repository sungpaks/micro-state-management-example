import ExampleWrapper from "@/components/ExampleWrapper";
import { createFileRoute } from "@tanstack/react-router";
import Parent from "./.components/Parent";
import { Count1Provider, Count2Provider, Count3Provider } from "./.contexts/count";

export const Route = createFileRoute("/sharing-component-state-with-context/factory-pattern-with-a-custom-hook/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <ExampleWrapper title="Factory pattern with a custom hook">
      <h1>직전에 살펴본 커스텀 훅과 Provider 컴포넌트의 생성을 Factory Pattern으로 자동화합니다.</h1>
      <Count1Provider initialValue={10}>
        <Count2Provider initialValue={20}>
          <Count3Provider initialValue={30}>
            <Parent />
          </Count3Provider>
        </Count2Provider>
      </Count1Provider>
    </ExampleWrapper>
  );
}
