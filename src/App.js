import { ToastContainer } from 'react-toastify';
import GlobalStyle from './styles/global';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Home />
      <GlobalStyle />
      <ToastContainer />
    </>
  );
}

export default App;
