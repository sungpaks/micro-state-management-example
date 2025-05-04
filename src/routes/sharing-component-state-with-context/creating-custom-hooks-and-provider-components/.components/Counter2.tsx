import { useCount2 } from "../.contexts/count2";
import Button from "@/components/Button";
import RenderCount from "@/components/RenderCount";

export default function Counter2() {
  const [count, setCount] = useCount2();
  return (
    <div>
      Count2: {count}
      <RenderCount />
      <Button onClick={() => setCount(count + 1)}>+1</Button>
    </div>
  );
}
