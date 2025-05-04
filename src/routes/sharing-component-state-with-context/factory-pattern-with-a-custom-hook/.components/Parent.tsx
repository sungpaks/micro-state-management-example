import Counter1 from "./Counter1";
import Counter2 from "./Counter2";
import Counter3 from "./Counter3";

export default function Parent() {
  return (
    <>
      <Counter1 />
      <Counter1 />
      <Counter2 />
      <Counter2 />
      <Counter3 />
      <Counter3 />
      <br />
      <p>
        아래와 같이 (Context 생성) + (Provider 컴포넌트 생성) + (커스텀훅 생성)을 모두 책임지는 팩토리인{" "}
        <code>{`createStateContext`}</code>를 만들었습니다.
      </p>
      <img
        src="https://i.imgur.com/7EbKgID.png"
        alt="팩토리 패턴 예제 코드"
        // style={{
        //   width: "560px",
        // }}
      />
      <p>이제 이 팩토리 함수를 사용하면 아래와 같이 반복 코드를 크게 줄일 수 있습니다.</p>
      <img
        src="https://i.imgur.com/CyW6943.png"
        alt="팩토리 패턴 사용 예제 코드"
        // style={{
        //   width: "560px",
        // }}
      />
    </>
  );
}
