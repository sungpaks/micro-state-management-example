import { useContext } from "react";
import { Count1Context, DispatchContext } from "./Provider";
import Button from "@/components/Button";
import RenderCount from "@/components/RenderCount";

export default function Counter1() {
  const count1 = useContext(Count1Context);
  const dispatch = useContext(DispatchContext);
  return (
    <div className="flex gap-2">
      Count1: {count1}
      <RenderCount />
      <Button onClick={() => dispatch({ type: "INC1" })}>+1</Button>
    </div>
  );
}
