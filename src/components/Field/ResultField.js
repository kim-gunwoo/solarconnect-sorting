import { Container, FieldHeader, TextArea } from ".";

const ResultField = ({ fieldName, value, excutionTime }) => {
  return (
    <Container>
      <FieldHeader>{fieldName}</FieldHeader>
      <div>{`${excutionTime.toPrecision(5)}ms`}</div>
      <TextArea value={value} readOnly />
    </Container>
  );
};

export default ResultField;
