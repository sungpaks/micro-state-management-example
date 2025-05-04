import { useContext } from "react";
import { CountContext1 } from "./Provider";
import Button from "@/components/Button";
import RenderCount from "@/components/RenderCount";

export default function Counter1() {
  const [count1, setCount1] = useContext(CountContext1);
  return (
    <div className="flex gap-2">
      Count1: {count1}
      <RenderCount />
      <Button onClick={() => setCount1(count1 + 1)}>Increment</Button>
    </div>
  );
}
