import ExampleWrapper from "@/components/ExampleWrapper";
import { createFileRoute } from "@tanstack/react-router";
import ModuleStateExample1 from "./.components/ModuleStateExample1";
import ModuleStateExample2 from "./.components/ModuleStateExample2";
import { IconChevronsDown } from "@tabler/icons-react";
import CreateStoreExample from "./.components/CreateStoreExample";
import ExampleLink from "@/components/ExampleLink";

export const Route = createFileRoute("/sharing-module-state-with-subscription/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <h1 className="text-xl mt-8">Sharing Module State with Subscription</h1>
      <h2>Module State와 Subscription 기법으로 상태를 전역적으로 공유하는 방법을 알아봅니다.</h2>
      <ExampleWrapper title="Using a module state as a global state in React">
        <ModuleStateExample1 />
        <IconChevronsDown className="text-amber-700 w-10 h-5 scale-x-150" />
        <ModuleStateExample2 />
      </ExampleWrapper>
      <ExampleWrapper title="Adding a basic Subscription">
        <CreateStoreExample />
        <ExampleLink to="/sharing-module-state-with-subscription/working-with-a-selector">
          Solution1: Working with a selector
        </ExampleLink>
        <ExampleLink to="/sharing-module-state-with-subscription/working-with-use-subscription">
          Solution2: Working with useSubscription
        </ExampleLink>
      </ExampleWrapper>
    </>
  );
}
