import styled from 'styled-components'

export const Container = styled.div`


.titulo{
    color: #2E2E2E;
    font-size: 42px;
    text-align: center;
    padding-top: 180px;
    paddinf-botom: 130px
}
.peixe{
    position: absolute;
    width: 140px;
    height: 140px;
    left: 382px;
    top: 630px;
}
.cogumelo{
    position: absolute;
    width: 100px;
    height: 100px;
    left: 1192px;
    top: 587px;
}
.folha{
    z-index: -1;
    position: absolute;
    width: 100px;
    height: 96.77px;
    left: 1316px;
    margin-top: -237px;
}
.pimenta{
    padding-top: 50px;
}

`

export const Preco = styled.div`
    display: flex;
    justify-content: space-evenly;

    margin-top: 140px;
 
    .La-Cuma{
        position: static;
        flex-direction: column;
        width: 256px;
        height: 275px;
        background-color: #FEF6F4;
        border: none;
        border-radius: 25px;
    }
    .La-Menta{
        position: static;
        flex-direction: column;
        width: 256px;
        height: 275px;
        background-color: #FEF6F4;
        border: none;
        border-radius: 25px;
    }
    .La-Bana{
        position: static;
        flex-direction: column;
        width: 256px;
        height: 275px;
        background-color: #FEF6F4;
        border: none;
        border-radius: 25px;
    }
    
    .La-Toca{
        position: static;
        flex-direction: column;
        width: 256px;
        height: 275px;
        background-color: #FEF6F4;
        border: none;
        border-radius: 25px;
    }
    .La-Cuma-Pizza{
        position: relative;
        width: 120px;
        height: 120px;
        margin-left: 75px;
        margin-top: -60px;
        cursor: pointer;
        -moz-transition: all 0.3s;
        -webkit-transition: all 0.3s;
        transition: all 0.3s;
    }
    .La-Cuma-Pizza:hover{
        -moz-transform: scale(1.2);
        -webkit-transform: scale(1.2);
        transform: scale(1.2);
    }
    .La-Menta-Pizza{
        position: relative;
        width: 120px;
        height: 120px;
        margin-left: 75px;
        margin-top: -60px;
        cursor: pointer;
        -moz-transition: all 0.3s;
        -webkit-transition: all 0.3s;
        transition: all 0.3s;
    }
    .La-Menta-Pizza:hover{
        -moz-transform: scale(1.2);
        -webkit-transform: scale(1.2);
        transform: scale(1.2);
    }
    .La-Bana-Pizza{
        position: relative;
        width: 120px;
        height: 120px;
        margin-left: 75px;
        margin-top: -60px;
        cursor: pointer;
        -moz-transition: all 0.3s;
        -webkit-transition: all 0.3s;
        transition: all 0.3s;
    }
    .La-Bana-Pizza:hover{
        -moz-transform: scale(1.2);
        -webkit-transform: scale(1.2);
        transform: scale(1.2);
    }
    .La-Toca-Pizza{
        position: relative;
        width: 120px;
        height: 120px;
        margin-left: 75px;
        margin-top: -60px;
        cursor: pointer;
        -moz-transition: all 0.3s;
        -webkit-transition: all 0.3s;
        transition: all 0.3s;
    }
    .La-Toca-Pizza:hover{
        -moz-transform: scale(1.2);
        -webkit-transform: scale(1.2);
        transform: scale(1.2);
    }
  
    .circulo{
        position: absolute;
        width: 35px;
        height: 35px;
        margin-left: 5px;
        margin-top: -10px;

    }
    .coracao{
       position: absolute;
       margin-left: 15px;
       margin-top: -0px;
    }
    .nome-pizza{
       position: relative;
        width: 89px;
        height: 23px;
        margin-left: 88px;
        margin-top: 10px;
        margin-bottom: 10px;
        font-size: 20px;
        font-weight: 600;
        color: #2E2E2E;
    }
    .descricao-pizza{
       position: relative;
        width: 180px;
        height: 60px;
        margin-left: 40px;
        margin-top: 20px;
        margin-bottom: 10px;
        
        font-size: 16px;
        line-height: 20px;
        text-align: center;
        color: #616161;
    }
    .preco-pizza{
        position: relative;
        font-size: 32px;
        font-weight: 600;
        width: 91px;
        height: 40px;
        margin-left: 80px;
        margin-top: 20px;
        margin-bottom: 10px;
    }
    .botao-pizza{
        position: relative;
        width: 157px;
        height: 31px;
        margin-left: 45px;
        margin-top: 14px;
        margin-bottom: 10px;
        border: none;
        border-radius: 25px;
        background-color: #FFA200;
        cursor: pointer;
        -moz-transition: all 0.3s;
        -webkit-transition: all 0.3s;
        transition: all 0.3s;
    }
    .botao-pizza:hover{
        -moz-transform: scale(1.1);
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }
`