import {
  Footer
} from '@el-espectador-ti/ee-components';
import React, { useState, useEffect } from 'react';
import { networks, services, socialIcons } from './_children/array';
import { footerSections } from '../../Utilities/sections';
import { imagesMenu } from '../../Utilities/imagesMenu';

const FooterPage = () => {
  const [isMobile, setMobile] = useState(false);
    const home = true;
    const logos = {
      ami: `/images/ami.png`,
      full: `/images/logoFull.svg`,
      iab: `/images/iab.png`,
      short: `/images/logoShort.svg`,
  
      sic: `/images/sic.png`,
      contactUs:`/images/contact_us.svg`,
      opinion_mano: 
        `/images/opinion_mano.svg`,
    };
  
    const networks= [
      {
        "name": "Noticias de famosos en Caracol TV",
        "nameArticle": "Caracol TV",
        "link": "https://www.caracoltv.com/regias/famosos?utm_source=elespectador.com&utm_medium=referral&utm_campaign=footer-EE",
        "outside": true
      },
      {
        "name": "Noticias del mundo Noticias Caracol",
        "nameArticle": "Noticias Caracol",
        "link": "https://noticias.caracoltv.com/colombia?utm_source=elespectador.com&utm_medium=referral&utm_campaign=footer-EE",
        "outside": true
      },
      {
        "name": "Gol Caracol Noticias de Fútbol",
        "nameArticle": "Gol Caracol",
        "link": "https://gol.caracoltv.com/noticias-futbol?utm_source=elespectador.com&utm_medium=referral&utm_campaign=footer-EE",
        "outside": true
      },
      {
        "name": "Noticias de Bogotá en Blu",
        "nameArticle": "Blu Radio",
        "link": "https://www.bluradio.com/bogota?utm_source=elespectador.com&utm_medium=referral&utm_campaign=footer-EE",
        "outside": true
      },
      {
        "name": "Shock: música y cultura pop",
        "nameArticle": "Shock",
        "link": "https://www.shock.co/musica/?utm_source=elespectador.com&utm_medium=referral&utm_campaign=footer-EE",
        "outside": true
      },
      {
        "name": "Noticias de farándula en La Kalle",
        "nameArticle": "La Kalle",
        "link": "https://lakalle.bluradio.com/noticias?utm_source=elespectador.com&utm_medium=referral&utm_campaign=footer-EE",
        "outside": true
      },
      {
        "name": "HJCK: Noticias de cultura",
        "nameArticle": "HJCK",
        "link": "https://hjck.com/?utm_source=elespectador.com&utm_medium=referral&utm_campaign=footer-EE",
        "outside": true
      },
      {
        "name": "Todo sobre gaming en VOLK Games",
        "nameArticle": "VOLK Games",
        "link": "https://www.volkgames.com/noticias/?utm_source=elespectador.com&utm_medium=referral&utm_campaign=footer-EE",
        "outside": true
      },
      {
        "name": "Series y telenovelas Caracol Play",
        "nameArticle": "Caracol Play",
        "link": "https://play.caracoltv.com/series?utm_source=elespectador.com&utm_medium=referral&utm_campaign=footer-EE",
        "outside": true
      },
      {
        "name": "Caracol Next",
        "nameArticle": "Caracol Next",
        "link": "https://www.caracolnext.com/?utm_source=elespectador.com&utm_medium=referral&utm_campaign=footer-EE",
        "outside": true
      },
      {
        "name": "Caracol corporativo",
        "nameArticle": "Caracol TV Corp",
        "link": "https://www.caracoltvcorporativo.com/?utm_source=elespectador.com&utm_medium=referral&utm_campaign=footer-EE",
        "outside": true
      },
      {
        "name": "Caracol Internacional",
        "nameArticle": "Caracol Int",
        "link": "https://www.caracolinternacional.com/?utm_source=elespectador.com&utm_medium=referral&utm_campaign=footer-EE",
        "outside": true
      }
    ]
    const services = [
      {
        "name": "Suscripción digital",
        "link": "/suscripcion-digital/?utm_source=interno&utm_medium=footer&utm_campaign=suscripcion_digital&utm_content=servicios_footer/"
      },
      {
        "name": "Somos el espectador",
        "link": "/somos-espectador/",
        "outside": true
      },
      {
        "name": "Suscripción impresa",
        "link": "http://suscripciones.elespectador.com/",
        "outside": true
      },
      {
        "name": "Pauta con nosotros",
        "link": "https://pauteconnosotros.elespectador.com/",
        "outside": true
      },
      {
        "name": "Responsabilidad social",
        "link": "/responsabilidad-y-compromiso-social/"
      },
      {
        "name": "Newsletters",
        "link": "/newsletters/"
      },
      {
        "name": "Avisos judiciales",
        "link": "https://judiciales.elespectador.com/",
        "outside": true
      },
      {
        "name": "Foros el espectador",
        "link": "http://foros.elespectador.com/",
        "outside": true
      },
      {
        "name": "Autores de contenido",
        "link": "/autores/"
      },
      {
        "name": "Preguntas frecuentes",
        "link": "/terminos/preguntas-frecuentes/"
      },
      {
        "name": "Ayuda",
        "link": "/ayuda-el-espectador/"
      }
    ]
    const allies = [
      {
        "name": "Descuentos",
        "link": "https://descuentos.elespectador.com/",
        "outside": true
      },
      {
        "name": "Director Técnico",
        "link": "https://directortecnico.elespectador.com/",
        "outside": true
      },
      {
        "name": "Inglés",
        "link": "https://idiomas.elespectador.com/es/gymglish",
        "outside": true
      },
      {
        "name": "Francés",
        "link": "https://idiomas.elespectador.com/es/frantastique",
        "outside": true
      },
      {
        "name": "Alemán",
        "link": "https://idiomas.elespectador.com/es/wunderbla",
        "outside": true
      },
      {
        "name": "spanish",
        "link": "https://idiomas.elespectador.com/en/hotel-borbollon",
        "outside": true
      }
    ]
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
  
    //Use effect to manage resize
    useEffect(() => {
      const updateWidth = () => {
        const width =  window.innerWidth;
        const bool = width < 1200 ? true : false;
        setMobile(bool);
      };
      updateWidth();
      typeof window !== 'undefined' &&
        window.addEventListener('resize', updateWidth);
  
      return () => {
        window.removeEventListener('resize', updateWidth);
      };
    }, []);
  return (
    <div>
        <Footer
          isMobile={isMobile}
          isHome={home}
          logos={logos}
          sections={footerSections(imagesMenu())}
          socialIcons={socialIcons}
          services={services}
          networks={networks}
          allies={allies}
        />
    </div>
  )
}

export default FooterPage;