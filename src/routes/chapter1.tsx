import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/chapter1")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/chapter1"!</div>;
}
