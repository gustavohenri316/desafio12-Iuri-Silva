import styled from 'styled-components'


export const Container = styled.div`
display: flex;
`
export const Logo = styled.div`
position: absolute;
width: 377px;
height: 121px;
left: 531px;
top: 188px;
.Logo{
    -moz-transition: all 0.3s;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
}
    .Logo:hover{
        -moz-transform: scale(1.2);
        -webkit-transform: scale(1.2);
        transform: scale(1.5);
    }
`
export const Plant = styled.div`
position: absolute;
width: 100px;
height: 119.85px;
top: 460px;
`