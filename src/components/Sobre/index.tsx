import React from 'react';
import * as C from './styles'
import Tomate from '../../images/tomate.svg'
import Restaurante from '../../images/restaurante.svg'
import Pizza from '../../images/Pizza.svg'
import circulo from '../../images/circulowhite.svg'
import SobreaLaPizza from '../../images/SobreaLaPizza.svg'
import Grupo2 from '../../images/Group2.svg'

const Sobre: React.FC = () => {
    return (
        <C.Container>
            <img className='tomate' src={Tomate} />
            <C.Sobre>
                <div className='restaurante-image'>
                    <img className='restaurante' src={Restaurante} />
                    <img className='pizza' src={Pizza} />
                    <img className='circulo' src={circulo} />
                </div>
                <div className='Sobre'>
                    <img className='titulo' src={SobreaLaPizza} />
                    <p className='paragrafo'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis justo sem. Donec consequat, nunc a dapibus dapibus, justo dolor tristique tortor, sit amet tincidunt lorem nisl at ex. Cras dolor purus, varius in euismod pretium, finibus nec mi. Curabitur aliquam pharetra lectus in pharetra. Nullam viverra elementum neque quis fermentum. </p>
                    <button className='botao'>Ler mais </button>
                    <img className='group'src={Grupo2}/>
                </div>
            </C.Sobre>
            <C.Footer>
                <p>TODOS OS DIREITOS RESERVADOS</p>
            </C.Footer>
        </C.Container>
    );
}

export default Sobre;