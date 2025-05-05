import { createContext, useContext } from "react";

const ColorContext = createContext("black");

const Component = () => {
  const color = useContext(ColorContext);
  return <div style={{ color }}>Hello {color}</div>;
};

const BenefitOfContextExample = () => (
  <>
    <Component />
    <ColorContext.Provider value="red">
      <Component />
    </ColorContext.Provider>
    <ColorContext.Provider value="green">
      <Component />
    </ColorContext.Provider>
    <ColorContext.Provider value="blue">
      <Component />
      <ColorContext.Provider value="skyblue">
        <Component />
      </ColorContext.Provider>
    </ColorContext.Provider>
    <img src="https://i.imgur.com/SX9T5yV.png" alt="useContext : benefit of context - 1" />
    <img src="https://i.imgur.com/1v7jOZU.png" alt="useContext : benefit of context - 2" />
    <p>
      Context를 사용하면 컴포넌트 간에 상태를 공유할 수 있습니다. <br />
      특히 위와 같은 예시처럼, 서로 다른 서브트리에 대해 서로 다른 값을 전달할 수 있다는 점이 장점입니다.
    </p>
  </>
);

export default BenefitOfContextExample;
