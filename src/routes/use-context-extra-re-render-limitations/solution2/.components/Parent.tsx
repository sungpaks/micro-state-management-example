import Counter1 from "./Counter1";
import Counter2 from "./Counter2";

export default function Parent() {
  return (
    <>
      <Counter1 />
      <Counter1 />
      <Counter2 />
      <Counter2 />
    </>
  );
}
