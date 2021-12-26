import React from 'react';
import * as C from './styles'
import Fundo from '../../images/fundo.svg'
import LaPizza from '../../images/LaPizza.svg'
import Plant from '../../images/Plant.svg'

const Header: React.FC = () => {
  return (
      <C.Container>
          <img src={Fundo}/>
          <C.Logo>
            <img className='Logo'src={LaPizza}/>
          </C.Logo>
            <C.Plant>
                <img src={Plant}/>
            </C.Plant>
      </C.Container>
  )
}

export default Header;