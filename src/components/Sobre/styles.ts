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
    justify-content: space-around;
    align-items: center;
    
    .restaurante{
        z-index: -2;
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
`