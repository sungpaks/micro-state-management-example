import { useRef } from "react";

import { useEffect } from "react";

export default function useRenderCount() {
  const renderCount = useRef(0);
  useEffect(() => {
    renderCount.current++;
  });
  return renderCount.current;
}
