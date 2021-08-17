import { Container, FieldHeader, TextArea } from ".";

const ResultField = ({ fieldName, value }) => {
  return (
    <Container>
      <FieldHeader>{fieldName}</FieldHeader>
      <TextArea value={value} contentEditable='false' />
    </Container>
  );
};

export default ResultField;
