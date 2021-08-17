import styled from "styled-components";

export default function DefaultButton({ children, onClick }) {
  return <Container onClick={onClick}>{children}</Container>;
}

const Container = styled.button`
  cursor: pointer;
`;
