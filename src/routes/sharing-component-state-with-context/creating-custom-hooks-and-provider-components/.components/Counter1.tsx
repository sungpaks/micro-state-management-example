import { useCount1 } from "../.contexts/count1";
import Button from "@/components/Button";
import RenderCount from "@/components/RenderCount";

export default function Counter1() {
  const [count, setCount] = useCount1();
  return (
    <div>
      Count1: {count}
      <RenderCount />
      <Button onClick={() => setCount(count + 1)}>+1</Button>
    </div>
  );
}
