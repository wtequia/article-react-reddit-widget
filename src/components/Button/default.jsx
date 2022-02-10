import {
    Header,
    Icon,
    Button,
  } from '@el-espectador-ti/ee-components';
  import React from 'react';


  const ButtonTest = () => {
      return (
        <Button
        className='Button-upgradePlan Button_leftSpace Button-upgradePlan_popUp Button_yellow'
        link={
          '/suscripcion-digital/?utm_source=interno&utm_medium=boton&utm_campaign=guardar_articulos&utm_content=boton_suscripción_guardar-articulos'
        }
      >
        Suscríbete
        <Icon
          className='Icon_seeMore Icon_popUpSeeMore'
          icon='angle-double-right'
        />
      </Button>
      )
  }
  export default ButtonTest;