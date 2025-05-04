import Counter1 from "./Counter1";
import Counter2 from "./Counter2";

export default function Parent() {
  return (
    <>
      <Counter1 />
      <Counter1 />
      <Counter2 />
      <Counter2 />

      <p>아래와 같이 Context Provider + Context 값에 접근하는 커스텀훅까지 한 세트로 만들어냅니다</p>
      <img src="https://i.imgur.com/XmS4gcy.png" alt="Context와 커스텀훅, Provider까지 한 세트" />
      <p>
        주로 <code>{`contexts/count1.tsx`}</code>와 같은 별도 파일에 선언되며 <code>{`useCount1`}</code>과{" "}
        <code>{`Count1Provider`}</code>를 export합니다.
      </p>
    </>
  );
}
