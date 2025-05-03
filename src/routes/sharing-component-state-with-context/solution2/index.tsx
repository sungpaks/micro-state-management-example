import ExampleWrapper from "@/components/ExampleWrapper";
import { createFileRoute } from "@tanstack/react-router";
import Provider from "./.components/Provider";
import Parent from "./.components/Parent";

export const Route = createFileRoute(
  "/sharing-component-state-with-context/solution2/"
)({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <ExampleWrapper title="Creating one state with useReducer and propagating with multiple Contexts">
      <Provider>
        <Parent />
      </Provider>
    </ExampleWrapper>
  );
}
