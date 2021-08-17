import styled from "styled-components";

export default function DefaultButton({ children, onClick }) {
  return <Container onClick={onClick}>{children}</Container>;
}

const Container = styled.button`
  width: 100%;
  padding: 10px 30px;
  background-color: #2490ff;
  border: none;
  font-size: 20px;
  color: white;
  cursor: pointer;
`;
