import logo from '../../assets/pLogo.svg';
import projetoCurso from '../../assets/projetoCurso.svg';
import { Container, Content } from './styles';

const Header = () => {
  return (
    <Container>
      <Content>
        <a href="https://projetocurso.com.br/" target="_blank" rel="noreferrer">
          <img src={logo} alt="projetoCurso" />
        </a>
        <img src={projetoCurso} alt="projetoCurso" />
      </Content>
    </Container>
  );
};

export default Header;
