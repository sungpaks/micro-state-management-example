import { useContext } from "react";
import { CountContext2 } from "./Provider";
import Button from "@/components/Button";
import RenderCount from "@/components/RenderCount";

export default function Counter2() {
  const [count2, setCount2] = useContext(CountContext2);
  return (
    <div className="flex gap-2">
      Count2: {count2}
      <RenderCount />
      <Button onClick={() => setCount2(count2 + 1)}>Increment</Button>
    </div>
  );
}
