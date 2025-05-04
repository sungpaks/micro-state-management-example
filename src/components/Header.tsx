import { IconChevronLeft } from "@tabler/icons-react";
import { Link, useLocation } from "@tanstack/react-router";
export default function Header() {
  const pathname = useLocation({
    select: (location) => location.pathname,
  });

  return (
    <div className="sticky top-0 z-10 bg-amber-200 w-full p-2 space-y-2">
      <div className="flex gap-2">
        {pathname !== "/" && (
          <Link to="..">
            <IconChevronLeft className="w-6 h-6" />
          </Link>
        )}
        <div className="flex justify-between w-full">
          <h1>
            Micro State Management <small>with React Hooks</small> Example
          </h1>
          <h2>feat. Tanstack Router</h2>
        </div>
      </div>
      <div className="flex gap-2">
        <Link to="/sharing-component-state-with-context" className="bg-amber-400 px-2 py-1">
          Chapter 3
        </Link>
        <Link to="/sharing-module-state-with-subscription" className="bg-amber-400 px-2 py-1">
          Chapter 4
        </Link>
      </div>
    </div>
  );
}
