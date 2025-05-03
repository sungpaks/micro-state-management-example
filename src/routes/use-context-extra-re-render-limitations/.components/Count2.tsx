import { memo, useContext } from "react";
import { CountContext } from "..";
import RenderCount from "@/components/RenderCount";

export function Count2() {
  const { count2 } = useContext(CountContext);
  return (
    <div>
      Count2: {count2}
      <RenderCount />
    </div>
  );
}

export const MemoCount2 = memo(Count2);
