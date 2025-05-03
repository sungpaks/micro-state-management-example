import { useCount2 } from "./CountProvider";
import Button from "@/components/Button";
import RenderCount from "@/components/RenderCount";
import React from "react";

export default function Counter2() {
  const [count, setCount] = useCount2();
  return (
    <div>
      Count1: {count}
      <RenderCount />
      <Button onClick={() => setCount(count + 1)}>+1</Button>
    </div>
  );
}
