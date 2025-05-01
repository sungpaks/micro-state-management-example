import { memo, useContext, useEffect, useRef } from "react";
import { CountContext } from "..";

export function Count2() {
  const { count2 } = useContext(CountContext);
  const renderCount = useRef(0);
  useEffect(() => {
    renderCount.current++;
  });
  return (
    <div>
      Count2: {count2}
      <small> (Render count: {renderCount.current})</small>
    </div>
  );
}

export const MemoCount2 = memo(Count2);
