import { useCount1 } from "../.contexts/count";
import Button from "@/components/Button";
import RenderCount from "@/components/RenderCount";

export default function Counter1() {
  const [count1, setCount1] = useCount1();

  return (
    <div className="flex gap-2">
      count1: {count1} <RenderCount />
      <Button onClick={() => setCount1((prev) => prev + 1)}>+1</Button>
    </div>
  );
}
