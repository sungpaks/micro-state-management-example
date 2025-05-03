import ExampleWrapper from "@/components/ExampleWrapper";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/sharing-component-state-with-context/creating-custom-hooks-and-provider-components/"
)({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <ExampleWrapper title="Creating custom hooks and provider components">
      <h1>
        Context의 값에 접근하기 위한 커스텀 훅과 Provider 컴포넌트를
        만들어봅니다
      </h1>
    </ExampleWrapper>
  );
}
