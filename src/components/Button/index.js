import { ButtonComponent } from './styles';

const Button = ({ ...rest }) => {
  return <ButtonComponent type="button" {...rest} />;
};

export default Button;
