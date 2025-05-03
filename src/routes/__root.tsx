import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import Header from "@/components/Header";

export const Route = createRootRoute({
  component: (e) => (
    <div className="bg-amber-100 pb-16 min-h-screen h-full w-full flex items-center flex-col relative">
      <Header />
      <Outlet />
      <TanStackRouterDevtools />
    </div>
  ),
});
