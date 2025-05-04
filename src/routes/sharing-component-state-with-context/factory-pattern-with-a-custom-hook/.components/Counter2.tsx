import { useCount2 } from "../.contexts/count";
import Button from "@/components/Button";
import RenderCount from "@/components/RenderCount";

export default function Counter2() {
  const [count2, setCount2] = useCount2();

  return (
    <div className="flex gap-2">
      count2: {count2} <RenderCount />
      <Button onClick={() => setCount2((prev) => prev + 1)}>+1</Button>
    </div>
  );
}
