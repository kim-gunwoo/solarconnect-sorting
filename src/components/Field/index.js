import styled from "styled-components";
import InputField from "./InputField";
import ResultField from "./ResultField";

export const Container = styled.div`
  padding: 20px;
  background-color: #f2f4f5;
  text-align: center;
  font-size: 20px;
`;

export const FieldHeader = styled.h3`
  padding-bottom: 20px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 100px;
  border: none;
  resize: none;
  overflow: auto;
`;

export { InputField, ResultField };
