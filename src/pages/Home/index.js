import { useCallback } from 'react';
import {
  Container,
  ContainerText,
  Content,
  ContentHeader,
  ContentBody,
  ImageContainer,
  FormWindow,
} from './styles';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Button from '../../components/Button';
import pc from '../../assets/photo.svg';

const Home = () => {
  const handleSubmit = useCallback(() => {}, []);

  return (
    <Container>
      <Header />
      <ContainerText>
        <h1>RECEBA NOSSO MATERIAL GRATUITAMENTE!</h1>
      </ContainerText>
      <Content>
        <ContentHeader>
          <h1>Descubra como fazer um curso pode mudar sua vida!</h1>
          <h2>Preencha os campos abaixo para receber</h2>
        </ContentHeader>
        <ContentBody>
          <ImageContainer>
            <div>
              <img src={pc} alt="pc" />
            </div>
          </ImageContainer>
          <FormWindow onSubmit={handleSubmit}>
            <Input
              name="nome"
              label="Nome"
              type="text"
              placeholder="Colocar o nome"
            />
            <Input
              name="email"
              label="Email"
              type="email"
              placeholder="Colocar o E-mail"
            />
            <Input
              name="telefone"
              label="Telefone"
              type="tel"
              placeholder="DDD-00000-0000"
              pattern="[0-9]{3}-[0-9]{5}-[0-9]{4}"
            />
            <Textarea name="textarea" type="text" />
            <Button>ENVIAR</Button>
          </FormWindow>
        </ContentBody>
      </Content>
    </Container>
  );
};

export default Home;
