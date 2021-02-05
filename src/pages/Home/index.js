import { useCallback, useState } from 'react';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
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
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [textArea, setTextArea] = useState('');

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      const data = {
        nome: name,
        email,
        telefone: phone,
        textArea,
      };

      const schema = Yup.object().shape({
        nome: Yup.string().required('Nome obrigatório'),
        email: Yup.string('Digite um e-mail válido').required(
          'E-mail obrigatório',
        ),
        telefone: Yup.string()
          .matches(new RegExp('[0-9]{9}'))
          .required('Digite um telefone válido'),
        textArea: Yup.string(),
      });

      try {
        await schema.validate(data, { abortEarly: false });
        toast.success(
          `Nós já recebemos o formulário, ${name}. Entraremos em contato em breve!`,
          { autoClose: 3800 },
        );

        setTimeout(() => {
          window.open(
            'https://drive.google.com/file/d/1MPxofGDTw5CxeboJjv7b8t7waaXu3WXf/view',
            '_blank',
          );
        }, 4000);
      } catch (err) {
        toast.error('Verifique os campos obrigatórios', { autoClose: 3800 });
      }
    },
    [email, name, phone, textArea],
  );

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
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              name="email"
              label="Email"
              type="email"
              placeholder="Colocar o E-mail"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              name="telefone"
              label="Telefone"
              type="tel"
              placeholder="DDD123456789"
              onChange={(e) => setPhone(e.target.value)}
            />
            <Textarea
              name="textarea"
              type="text"
              onChange={(e) => setTextArea(e.target.value)}
            />
            <Button type="submit">ENVIAR</Button>
          </FormWindow>
        </ContentBody>
      </Content>
    </Container>
  );
};

export default Home;
