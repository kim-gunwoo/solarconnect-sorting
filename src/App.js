import { useState } from "react";
import styled from "styled-components";
import { LocaleDateTimer } from "components/Timer";
import { Button } from "components/Button";
import { InputField, ResultField } from "components/Field";
import { quickSort, convertStringToNumberArray } from "utils/common";
import { DESC_RENDER_TIMEOUT } from "utils/constants";

export default function App() {
  const [input, setInput] = useState("");
  const [asceResult, setAsceResult] = useState("");
  const [descResult, setDescResult] = useState("");

  const startSort = () => {
    const numberArray = convertStringToNumberArray(input);
    const asceSortedArray = quickSort(numberArray).join(", ");
    const descSortedArray = quickSort(numberArray, true).join(", ");
    setAsceResult(asceSortedArray);

    setTimeout(() => {
      setDescResult(descSortedArray);
    }, DESC_RENDER_TIMEOUT);
  };

  const inputFieldChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <Container>
      <LocaleDateTimer />
      <InputField fieldName='입력' value={input} onChange={inputFieldChange} />
      <Wrapper>
        <Button onClick={startSort}>sort</Button>
      </Wrapper>
      <ResultField fieldName='오름차순' value={asceResult} />
      <ResultField fieldName='내림차순' value={descResult} />
      <LocaleDateTimer locales='en-US' />
    </Container>
  );
}

const Container = styled.div`
  max-width: 500px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Wrapper = styled.div`
  text-align: center;
`;
