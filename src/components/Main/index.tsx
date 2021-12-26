import * as C from './styles'
import React from 'react';
import Peixe from '../../images/peixe.svg'
import Cogumelo from '../../images/cogumelo.svg'
import LaCuma from '../../images/LaCuma.svg'
import Circulo from '../../images/circulo.svg'
import Coracao from '../../images/coracao.svg'
import LaMenta from '../../images/LaMenta.svg'
import LaBana from '../../images/LaBana.svg'
import LaToca from '../../images/LaToca.svg'
import Leaf from '../../images/Leaf.svg'
import Pimenta from '../../images/pimenta.svg'


const Main: React.FC = () => {
    return (
        <C.Container className='container'>
            <h1 className='titulo'>Mais vendidas</h1>
            <img className='peixe' src={Peixe} />
            <img className='cogumelo' src={Cogumelo} />
            <C.Preco>
                <div className='La-Cuma'>
                    <img
                        className='La-Cuma-Pizza'
                        src={LaCuma} />
                    <img
                        className='circulo'
                        src={Circulo} />
                    <img
                        className='coracao'
                        src={Coracao} />

                    <h2 className='nome-pizza'>La Cuma</h2>
                    <p className='descricao-pizza'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <h1 className='preco-pizza'>R$ 23</h1>
                    <button className='botao-pizza'>Compre Agora</button>
                </div>
                <div className='La-Menta'>
                    <img
                        className='La-Menta-Pizza'
                        src={LaMenta} />
                    <img
                        className='circulo'
                        src={Circulo} />
                    <img
                        className='coracao'
                        src={Coracao} />

                    <h2 className='nome-pizza'>La Menta</h2>
                    <p className='descricao-pizza'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <h1 className='preco-pizza'>R$ 23</h1>
                    <button className='botao-pizza'>Compre Agora</button>

                </div>
                <div className='La-Bana'>
                    <img
                        className='La-Bana-Pizza'
                        src={LaBana} />
                    <img
                        className='circulo'
                        src={Circulo} />
                    <img
                        className='coracao'
                        src={Coracao} />

                    <h2 className='nome-pizza'>La Bana</h2>
                    <p className='descricao-pizza'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <h1 className='preco-pizza'>R$ 23</h1>
                    <button className='botao-pizza'>Compre Agora</button>
                </div>
                <div className='La-Toca' >
                    <img
                        className='La-Toca-Pizza'
                        src={LaToca} />
                    <img
                        className='circulo'
                        src={Circulo} />
                    <img
                        className='coracao'
                        src={Coracao} />

                    <h2 className='nome-pizza'>La Toca</h2>
                    <p className='descricao-pizza'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <h1 className='preco-pizza'>R$ 23</h1>
                    <button className='botao-pizza'>Compre Agora</button>
                </div>
                
            </C.Preco>
            <img  className='folha'src={Leaf}/>
            <img  className='pimenta'src={Pimenta}/>
        </C.Container>
    );
}

export default Main;