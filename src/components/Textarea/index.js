import { Container } from './styles';

const Textarea = ({ name, ...rest }) => {
  return (
    <Container>
      <p>
        Conte-nos qual é a questão mais crítica de seu negócio (caso a opção
        anterior tenha sido “Outra”)
      </p>
      <textarea id={name} {...rest} />
    </Container>
  );
};

export default Textarea;
