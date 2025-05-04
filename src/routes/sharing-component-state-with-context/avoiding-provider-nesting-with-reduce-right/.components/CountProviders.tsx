import { ReactNode, createElement } from "react";
import {
  Count1Provider,
  Count2Provider,
  Count3Provider,
} from "../../factory-pattern-with-a-custom-hook/.contexts/count";

export default function Parent({ children }: { children: ReactNode }) {
  const providers = [
    [Count1Provider, { initialValue: 10 }],
    [Count2Provider, { initialValue: 20 }],
    [Count3Provider, { initialValue: 30 }],
  ] as const;
  return providers.reduceRight(
    (innerChildren, [Component, props]) => createElement(Component, props, innerChildren),
    children
  );
}
