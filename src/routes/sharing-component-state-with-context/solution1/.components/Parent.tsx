import Counter1 from "./Counter1";
import Counter2 from "./Counter2";

export default function Parent() {
  return (
    <>
      <p>Solution 1: 상태를 작은 조각으로 쪼갭니다</p>
      <Counter1 />
      <Counter1 />
      <Counter2 />
      <Counter2 />
    </>
  );
}
