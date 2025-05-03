import { memo, useContext } from "react";
import { CountContext } from "..";
import RenderCount from "@/components/RenderCount";

export function Count1() {
  const { count1 } = useContext(CountContext);
  return (
    <div>
      Count1: {count1}
      <RenderCount />
    </div>
  );
}

export const MemoCount1 = memo(Count1);
