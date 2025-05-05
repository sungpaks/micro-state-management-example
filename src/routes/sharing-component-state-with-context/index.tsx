import ExampleWrapper from "@/components/ExampleWrapper";
import { createFileRoute } from "@tanstack/react-router";
import { createContext, useState } from "react";
import ExampleLink from "@/components/ExampleLink";
import ExtraRerenderProblemExample from "./.components/ExtraRerenderProblemExample";

export const Route = createFileRoute("/sharing-component-state-with-context/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <h1 className="text-xl mt-8">Sharing Component State with Context</h1>
      <h2>Context를 사용해 컴포넌트 간에 상태를 공유하는 방법을 알아봅니다.</h2>
      <ExampleWrapper title="useContext : extra re-render limitations">
        <ExtraRerenderProblemExample />
      </ExampleWrapper>

      <ExampleWrapper title="Best practices for using Context">
        Context를 더 잘 사용하는 잡기술들을 알아봅니다.
        <ExampleLink to="/sharing-component-state-with-context/creating-custom-hooks-and-provider-components">
          Creating custom hooks and provider components
        </ExampleLink>
        <ExampleLink to="/sharing-component-state-with-context/factory-pattern-with-a-custom-hook">
          Factory pattern with a custom hook
        </ExampleLink>
      </ExampleWrapper>
    </>
  );
}
