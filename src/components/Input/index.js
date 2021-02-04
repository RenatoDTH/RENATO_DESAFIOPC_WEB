import { Container } from './styles';

const Input = ({ label, name, ...rest }) => {
  return (
    <Container>
      <label htmlFor={name}>{label} *</label>
      <input id={name} {...rest} />
    </Container>
  );
};

export default Input;
