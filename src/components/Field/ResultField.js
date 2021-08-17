import { Container, FieldHeader, TextArea } from ".";

const ResultField = ({ fieldName, value, excutionTime }) => {
  return (
    <Container>
      <FieldHeader>{fieldName}</FieldHeader>
      <TextArea value={value} readOnly />
      {excutionTime && <p>{`${excutionTime.toPrecision(3)}ms`}</p>}
    </Container>
  );
};

export default ResultField;
