import { Container, FieldHeader, TextArea } from ".";

const InputField = ({ fieldName, value, onChange, placeholder = "1, 2, 3, 4, ..." }) => {
  return (
    <Container>
      <FieldHeader>{fieldName}</FieldHeader>
      <TextArea placeholder={placeholder} onChange={onChange} value={value} />
    </Container>
  );
};

export default InputField;
