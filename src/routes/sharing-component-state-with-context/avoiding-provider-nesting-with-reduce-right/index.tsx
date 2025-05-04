import ExampleWrapper from "@/components/ExampleWrapper";
import { createFileRoute } from "@tanstack/react-router";
import CountProviders from "./.components/CountProviders";
import Parent from "./.components/Parent";

export const Route = createFileRoute(
  "/sharing-component-state-with-context/avoiding-provider-nesting-with-reduce-right/"
)({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <ExampleWrapper title="Avoiding provider nesting with reduce-right">
      <h1>
        <code>{`reduceRight`}</code>을 사용하여 Provider 컴포넌트 중첩을 완화합니다.
      </h1>
      <CountProviders>
        <Parent />
      </CountProviders>
    </ExampleWrapper>
  );
}
