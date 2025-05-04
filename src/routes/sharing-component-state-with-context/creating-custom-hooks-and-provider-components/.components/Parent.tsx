import Counter1 from "./Counter1";
import Counter2 from "./Counter2";
import ExampleLink from "@/components/ExampleLink";

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
      <br />
      <br />
      <p>그런데 문제는 매번 (Context 생성) + (Provider 컴포넌트 생성) + (커스텀훅 생성)을 반복해야 한다는 점입니다.</p>
      <p>이러한 문제에 대한 솔루션을 다음 섹션에서 알아봅니다.</p>
      <ExampleLink to="/sharing-component-state-with-context/factory-pattern-with-a-custom-hook">다음</ExampleLink>
    </>
  );
}
