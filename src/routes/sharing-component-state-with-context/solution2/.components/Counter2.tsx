import React, { useContext } from "react";
import { Count2Context, DispatchContext } from "./Provider";
import Button from "@/components/Button";
import RenderCount from "@/components/RenderCount";

export default function Counter2() {
  const count2 = useContext(Count2Context);
  const dispatch = useContext(DispatchContext);
  return (
    <div className="flex gap-2">
      Count2: {count2}
      <RenderCount />
      <Button onClick={() => dispatch({ type: "INC2" })}>+1</Button>
    </div>
  );
}
