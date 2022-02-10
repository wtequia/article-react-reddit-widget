import {
  Header,
  Nav,
  Button,
} from '@el-espectador-ti/ee-components';
import React from 'react';
import { burgerMenu, main } from '../../Utilities/sections';
import { imagesMenu } from '../../Utilities/imagesMenu';
import SearchComponent from './_children/searchComponent.jsx';

const HeaderPage = () => {
let headerAside = (
  <Header.Aside>
 <Button
        primary
        className='Button_subscribeHeader'
        link='https://www.elespectador.com/suscripcion-digital/'
      >
        Suscríbete
      </Button>
        <Button
          size='sm'
          className='Button_loginHeader'
          link={`https://www.elespectador.com/login/`}
        >
          Iniciar Sesión
        </Button> 
  </Header.Aside>
);

let avatar;

// eslint-disable-next-line

const MenuFooterContent =
  'El uso de este sitio web implica la aceptación de los <a href="/terminos/terminos-y-condiciones/"><strong>Términos y Condiciones</strong></a>  y <a href="/terminos/politica-de-tratamiento-de-datos/"><strong>Políticas de privacidad</strong></a> de COMUNICAN S.A. Todos los Derechos Reservados D.R.A. Prohibida su reproducción total o parcial, así como su traducción a cualquier idioma sin la autorización escrita de su titular. Reproduction in whole or in part, or translation without written permission is prohibited. All rights reserved 2021. <strong>Calle 103 No 69B-43 Código Postal: 111121.</strong>';
const _userOptions = [
  {
    content: 'Iniciar Sesión',
    link: 'https://www.elespectador.com/login/',
    whenActive: false,
  },
  {
    content: 'Registrarse',
    link: 'https://www.elespectador.com/register/',
    whenActive: false,
  },
  {
    content: (
      <span>
        Newsletters <i className='double-arrow-icon'></i>
      </span>
    ),
    className: 'DropMenu-Item2',
    link: 'https://www.elespectador.com/newsletters/',
  },
  {
    content: 'Cerrar sesión',
    whenActive: true,
    onClick: evt => {
      evt.preventDefault();
      window.tpObject.pianoId.logout();
      window.location.reload();
    },
    className: 'DropMenu-Item3',
  },
];


let title;
const _path = 'publisher/user/access/list';
// eslint-disable-next-line no-unused-vars




const home = true;
const sections = home
  ? { name: 'home', sections: [] }
  : { name: 'home', sections: [] }

const active = sections.active ? sections.active : '';

// const sections = home
//   ? { name: 'home', sections: [] }
//   : getSectionInfo(burgerMenu(imagesMenu(context)), urii, urii.split('/'));



const logoFull = 'images/logoFull.svg'
//console.log('Dark', isDark);
const logoShort = 'images/logoShort.svg'
const socialIcons = [
  {
    "url": "https://twitter.com/elespectador",
    "icon": "cc-twitter"
  },
  {
    "url": "https://www.facebook.com/elespectadorcom",
    "icon": "cc-facebook"
  },
  {
    "url": "https://www.youtube.com/user/Elespectadorcom?sub_confirmation=1",
    "icon": "cc-youtube"
  },
  {
    "url": "https://www.instagram.com/elespectador/",
    "icon": "cc-instagram"
  }
]
return (
  <div>
    <Header
      home={home}
      avatar={avatar}
      logo={!home}
      branded={false}
      logoShort={logoShort}
      logoFull={logoFull}
      taxonomyBurger={burgerMenu(imagesMenu())}
      socialIconsBurger={socialIcons}
      footerContentBurger={MenuFooterContent}
      userOptions={_userOptions}
    >
      <Header.TopBar logo>
          <Nav className='Nav-principal' navList={main} onlyDesktop />
      </Header.TopBar>
      {headerAside}
    </Header>
  </div>
);
};
  
export default HeaderPage;