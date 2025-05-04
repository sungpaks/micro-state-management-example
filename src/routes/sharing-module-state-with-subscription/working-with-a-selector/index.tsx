import ExampleWrapper from "@/components/ExampleWrapper";
import { createFileRoute } from "@tanstack/react-router";
import SubscriptionWithSelector from "./.components/SubscriptionWithSelector";

export const Route = createFileRoute("/sharing-module-state-with-subscription/working-with-a-selector/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <ExampleWrapper title="Working with a selector">
      <SubscriptionWithSelector />
    </ExampleWrapper>
  );
}
