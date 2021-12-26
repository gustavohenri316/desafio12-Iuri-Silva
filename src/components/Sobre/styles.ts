import styled from "styled-components";

export const Container = styled.div`
.tomate{
    width: 150px;
    height: 132px;
    margin-left: 84%;

}
`
export const Sobre = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    .restaurante-image{

    }
    .restaurante{
        width: 448px;
        z-index: -2;
         -moz-transition: all 0.3s;
        -webkit-transition: all 0.3s;
        transition: all 0.3s;
    }
    .restaurante:hover{
        -moz-transform: scale(1.2);
        -webkit-transform: scale(1.2);
        transform: scale(1.2);
    }

    .pizza{
        z-index: 1;
        position: absolute;
        margin-left: -540px;
        margin-top: 27px;
    }
    .circulo{
        position: absolute;
        margin-left: -540px;
        margin-top: 30px;
    }
    .Sobre{
        flex-direction: column;
        margin-top: 150px;
    }
    .titulo{
        position: absolute;
        width: 289px;
        height: 45px;
        margin-top: -100px;
        margin-left: -100px;
    }
    .paragrafo{
        width: 458px;
        font-size: 20px;
        color: #2E2E2E;
        font-weight: 300;
        margin-left: -100px;
        margin-top: -0px;
        color: #2e2e2e;
    }
    .botao{
        background-color: #FFA200;
        width: 148px;
        height: 39px;
        border-radius: 25px;
        border:none; 
        margin-top: 50px;
        margin-left: -100px;
        cursor: pointer;
        -moz-transition: all 0.3s;
        -webkit-transition: all 0.3s;
        transition: all 0.3s;
    }
    .botao:hover{
        -moz-transform: scale(1.2);
        -webkit-transform: scale(1.2);
        transform: scale(1.2);
    }
    .group{
        position: absolute;
        margin-top: 0px;
        margin-left: 250px;
    }
`
export const Footer = styled.div`
    padding-top: 80px;
    padding-bottom: 50px;
    text-align: center;
    color: #2e2e2e;
    font-size: 14px;
`