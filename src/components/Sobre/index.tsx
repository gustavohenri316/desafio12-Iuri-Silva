import React from 'react';
import * as C from './styles'
import Tomate from '../../images/tomate.svg'
import Restaurante from '../../images/restaurante.svg'
import Pizza from '../../images/Pizza.svg'
import circulo from '../../images/circulowhite.svg'
import SobreaLaPizza from '../../images/SobreaLaPizza.svg'

const Sobre: React.FC = () => {
  return (
      <C.Container>
          <img className='tomate' src={Tomate}/>
          <C.Sobre>
         <div className='Sobre'>
             <img  className='restaurante' src={Restaurante}/>
             <img className='pizza' src={Pizza}/>
             <img  className='circulo' src={circulo}/>
         </div>
         <div>
             <img src={SobreaLaPizza}/>
             <p></p>
             <button></button>
             <img/>
         </div>
         </C.Sobre>
      </C.Container>
  );
}

export default Sobre;