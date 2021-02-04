import logo from '../../assets/pLogo.svg';
import projetoCurso from '../../assets/projetoCurso.svg';
import { Container, Content } from './styles';

const Header = () => {
  return (
    <Container>
      <Content>
        <div>
          <img src={logo} alt="projetoCurso" />
        </div>
        <img src={projetoCurso} alt="projetoCurso" />
      </Content>
    </Container>
  );
};

export default Header;
