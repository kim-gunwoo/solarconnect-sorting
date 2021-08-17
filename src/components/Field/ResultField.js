import { Container, FieldHeader, TextArea } from ".";

const ResultField = ({ fieldName, value, excutionTime }) => {
  return (
    <Container>
      <FieldHeader>{fieldName}</FieldHeader>
      <TextArea value={value} readOnly />
      {excutionTime!==null &&( <div>{`${excutionTime.toPrecision(3)}ms`}</div>)}
    </Container>
  );
};

export default ResultField;
