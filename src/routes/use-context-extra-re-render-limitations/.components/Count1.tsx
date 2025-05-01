import { memo, useContext, useEffect, useRef } from "react";
import { CountContext } from "..";

export function Count1() {
  const { count1 } = useContext(CountContext);
  const renderCount = useRef(0);
  useEffect(() => {
    renderCount.current++;
  });
  return (
    <div>
      Count1: {count1}
      <small> (Render count: {renderCount.current})</small>
    </div>
  );
}

export const MemoCount1 = memo(Count1);
