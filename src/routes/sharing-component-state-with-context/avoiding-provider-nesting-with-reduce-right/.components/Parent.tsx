import Counter1 from "../../factory-pattern-with-a-custom-hook/.components/Counter1";
import Counter2 from "../../factory-pattern-with-a-custom-hook/.components/Counter2";
import Counter3 from "../../factory-pattern-with-a-custom-hook/.components/Counter3";

export default function Parent() {
  return (
    <>
      <Counter1 />
      <Counter1 />
      <Counter2 />
      <Counter2 />
      <Counter3 />
      <Counter3 />
      <p>
        아래와 같이 <code>{`reduceRight`}</code>을 사용하여 Provider 컴포넌트 트리를 구성합니다.
      </p>
      <img src="https://i.imgur.com/QNRZGie.png" alt="Provider 중첩 완화 예제 코드" />
      <p>
        위 예시에서는 또한 <i>Higher-Order Component</i>(<b>HOC</b>) 를 사용하여 DX를 향상했습니다.
      </p>
      <img src="https://i.imgur.com/tvUvdhB.png" alt="HOC 예시" />
      <p>이제 위와 같이 Provider 중첩이 잘 완화되었습니다.</p>
    </>
  );
}
