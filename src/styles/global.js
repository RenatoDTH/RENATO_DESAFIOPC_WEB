import 'react-toastify/dist/ReactToastify.css';
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0
  }

  html, body, #root {
    height: 100;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, button, input {
    font: 18px 'Montserrat', sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
