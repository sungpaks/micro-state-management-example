import ExampleWrapper from "@/components/ExampleWrapper";
import { createFileRoute } from "@tanstack/react-router";
import SubscriptionWithUseSubscription from "./.components/SubscriptionWithUseSubscription";

export const Route = createFileRoute("/sharing-module-state-with-subscription/working-with-use-subscription/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <ExampleWrapper title="Working with useSubscription">
      <SubscriptionWithUseSubscription />
    </ExampleWrapper>
  );
}
