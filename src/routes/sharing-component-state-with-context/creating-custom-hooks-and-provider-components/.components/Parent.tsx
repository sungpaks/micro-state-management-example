import React from "react";
import Counter1 from "./Counter1";
import Counter2 from "./Counter2";

export default function Parent() {
  return (
    <>
      <Counter1 />
      <Counter1 />
      <Counter2 />
      <Counter2 />

      <p>
        아래와 같이 Context Provider + Context 값에 접근하는 커스텀훅까지 한
        세트로 만들어냅니다
      </p>
      <img
        src="https://i.imgur.com/smNq2fi.png"
        alt="Context와 커스텀훅, Provider까지 한 세트"
        className="w-[560px]"
      />
    </>
  );
}
