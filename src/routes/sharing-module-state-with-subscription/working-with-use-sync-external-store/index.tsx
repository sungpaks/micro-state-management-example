import ExampleWrapper from "@/components/ExampleWrapper";
import { createFileRoute } from "@tanstack/react-router";
import SubscriptionWithUseSyncExternalStore from "./.components/SubscriptionWithUseSyncExternalStore";
export const Route = createFileRoute("/sharing-module-state-with-subscription/working-with-use-sync-external-store/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <ExampleWrapper title="Working with useSyncExternalStore">
      <SubscriptionWithUseSyncExternalStore />
    </ExampleWrapper>
  );
}
