import React from 'react';
import "@el-espectador-ti/ee-components/dist/index.css";
import './styles/searchGoogle.scss';
import './styles/header.scss';
import HeaderPage from './components/Header/default';
import FooterPage from './components/Footer/default';

function App({ type }) {

  if (type === 'header'){
  return (
      <HeaderPage></HeaderPage>
  );
  } else {
    return (
    <FooterPage></FooterPage>
    )
  }
}

export default App;

