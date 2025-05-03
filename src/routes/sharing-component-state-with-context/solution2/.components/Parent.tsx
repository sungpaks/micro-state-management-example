import Counter1 from "./Counter1";
import Counter2 from "./Counter2";

export default function Parent() {
  return (
    <>
      <p>
        Solution 2: useReducer를 사용하여 상태를 하나로 관리하고, 여러 개의
        Context를 전파합니다
      </p>
      <Counter1 />
      <Counter1 />
      <Counter2 />
      <Counter2 />
    </>
  );
}
