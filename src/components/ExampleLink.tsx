import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { Link, LinkProps } from "@tanstack/react-router";
import { PropsWithChildren } from "react";

export default function ExampleLink({
  to,
  children,
}: LinkProps & PropsWithChildren) {
  return (
    <Link to={to} className="p-4 mt-8 bg-white">
      <div className="flex items-center gap-2">
        <IconChevronRight className="w-4 h-4" />
        {children}
        <IconChevronLeft className="w-4 h-4" />
      </div>
    </Link>
  );
}
