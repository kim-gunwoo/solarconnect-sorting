import { useState } from "react";
import styled from "styled-components";
import { LocaleDateTimer } from "components/Timer";
import { Button } from "components/Button";
import { InputField, ResultField } from "components/Field";
import { quickSort, convertStringToNumberArray, checkExecutionTime } from "utils/common";
import { DESC_RENDER_TIMEOUT } from "utils/constants";

export default function App() {
  const [input, setInput] = useState("");
  const [asceResult, setAsceResult] = useState({ text: "", excutionTime: null });
  const [descResult, setDescResult] = useState({ text: "", excutionTime: null });

  const startSort = () => {
    const numberArray = convertStringToNumberArray(input);
    const [asceSortedText, asceSortTime] = checkExecutionTime(() =>
      quickSort(numberArray).join(", ")
    );
    const [descSortedText, descSortTime] = checkExecutionTime(() =>
      quickSort(numberArray, true).join(", ")
    );
    setAsceResult({
      text: asceSortedText,
      excutionTime: asceSortTime,
    });
    setTimeout(() => {
      setDescResult({
        text: descSortedText,
        excutionTime: descSortTime,
      });
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
      <ResultField
        fieldName='오름차순'
        value={asceResult.text}
        excutionTime={asceResult.excutionTime}
      />
      <ResultField
        fieldName='내림차순'
        value={descResult.text}
        excutionTime={descResult.excutionTime}
      />
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
