import ExampleWrapper from "@/components/ExampleWrapper";
import { createFileRoute } from "@tanstack/react-router";
import ContextAndSubscriptionExample from "./.components/ContextAndSubscriptionExample";

export const Route = createFileRoute("/sharing-component-state-with-context-and-subscription/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <h1 className="text-xl mt-8">Sharing Component State with Context and Subscription</h1>
      <h2>Context와 Subscription을 혼합하여 컴포넌트 간에 상태를 공유하는 방법을 알아봅니다.</h2>
      <ExampleWrapper title="Using Context and Subscription">
        <ContextAndSubscriptionExample />
      </ExampleWrapper>
    </>
  );
}
