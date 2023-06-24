import { useRef } from "react";
import useCounterStore from "../context/store";
import styled from "styled-components";

export default function Counter() {
  const { num, increase, decrease, remove } = useCounterStore((state) => state);
  const incRef = useRef<HTMLInputElement>(null);
  const decRef = useRef<HTMLInputElement>(null);

  const handleInc = () => {
    if (incRef.current !== null) {
      increase(parseInt(incRef.current.value, 10));
      incRef.current.value = "";
    }
  };

  const handleDec = () => {
    if (decRef.current !== null) {
      decrease(parseInt(decRef.current.value, 10));
      decRef.current.value = "";
    }
  };
  return (
    <Container>
      <div>{num}</div>
      <Wrapper>
        <input ref={incRef} />
        <button onClick={handleInc}>increase</button>
      </Wrapper>
      <Wrapper>
        <input ref={decRef} />
        <button onClick={handleDec}>decrease</button>
      </Wrapper>
      <button onClick={remove}>Remove</button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 500px;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  gap: 10px;

  input {
    flex-basis: 80%;
  }

  button {
    width: 80px;
  }
`;
