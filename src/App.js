import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import history from './services/history'
import Routes from './routes';
import GlobalStyle from './styles/global'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes history={history} />
    </BrowserRouter>
  );
}
export default App;
