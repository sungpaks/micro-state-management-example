import { useCount3 } from "../.contexts/count";
import Button from "@/components/Button";
import RenderCount from "@/components/RenderCount";

export default function Counter3() {
  const [count3, setCount3] = useCount3();

  return (
    <div className="flex gap-2">
      count3: {count3} <RenderCount />
      <Button onClick={() => setCount3((prev) => prev + 1)}>+1</Button>
    </div>
  );
}
