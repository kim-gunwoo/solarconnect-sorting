import { useState, useEffect } from "react";
import { LocaleDateTimer } from "components/Timer";
import { InputField, ResultField } from "components/Field";
import { quickSort } from "utils/common";

function App() {
  const [input, setInput] = useState("");
  const [numberArray, setNumberArray] = useState([]);
  const [asceResult, setAsceResult] = useState("");
  const [descResult, setDescResult] = useState("");

  const toNumber = (input) => {
    return Number(input);
  };

  const filterNaN = (item) => {
    return !isNaN(item);
  };

  const startSort = (array) => {
    const newNumberArray = array.split(",").map(toNumber).filter(filterNaN);
    setNumberArray(newNumberArray);
    console.log(newNumberArray);
    setAsceResult(quickSort(newNumberArray).join(", "));
  };

  const inputFieldChange = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    if (asceResult) {
      setTimeout(() => {
        setDescResult(quickSort(numberArray, true).join(", "));
      }, 3000);
    }
  }, [asceResult, numberArray]);

  return (
    <div className='App'>
      <LocaleDateTimer />
      <InputField fieldName='입력' value={input} onChange={inputFieldChange} />
      <button onClick={() => startSort(input)}>sort</button>
      <ResultField fieldName='오름차순' value={asceResult} />
      <ResultField fieldName='내림차순' value={descResult} />
      <LocaleDateTimer locales='en-US' />
    </div>
  );
}

export default App;
