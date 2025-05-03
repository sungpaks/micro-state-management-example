import ExampleWrapper from "@/components/ExampleWrapper";
import { createFileRoute } from "@tanstack/react-router";
import Provider from "./.components/Provider";
import Parent from "./.components/Parent";

export const Route = createFileRoute(
  "/sharing-component-state-with-context/solution1/"
)({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <ExampleWrapper title="Creating small state pieces">
      <Provider>
        <Parent />
      </Provider>
    </ExampleWrapper>
  );
}
