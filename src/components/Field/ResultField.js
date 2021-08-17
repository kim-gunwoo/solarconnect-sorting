import { Container, FieldHeader, TextArea } from ".";

const ResultField = ({ fieldName, value, excutionTime }) => {
  return (
    <Container>
      <FieldHeader>{fieldName}</FieldHeader>
      {excutionTime && <div>{`${excutionTime.toPrecision(3)}ms`}</div>}
      <TextArea value={value} readOnly />
    </Container>
  );
};

export default ResultField;
