import styled, { createGlobalStyle, keyframes } from "styled-components";
import mousePointer from "../components/hand-removebg-preview_20px.png"

export const GlobalStyle = createGlobalStyle`
@keyframes deplacementNavigationHaut {
    from {
        top: -18vh;
    }
    to {
        top: 0vh;
    }
}
@keyframes deplacementNavigationBas {
    from {
        top: 0vh;
    }
    to {
        top: -18vh;
    }
}
@keyframes grandirNavigation {
    from {
        height: 5vh;
    }
    to {
        height: 23vh;
    }
}
@keyframes retrecirNavigation {
    from {
        height: 23vh;
    }
    to {
        height: 5vh;
    }
}
`

export const Nav = styled.nav`
position: fixed;
z-index: 1;
background: #4b4a4a;;
width: 100%;

@media (max-width: 700px){
    height: 5vh;
    z-index: 2;
}
`

export const DivNavPhone = styled.div`
display: none;

@media (max-width: 700px){
    height: 5vh;
    width: 100%;
    background: #4b4a4a;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    z-index: 1;
}
`

export const SousDivNavPhone = styled.div`
height: 100%;
width: 80%;
`

export const ContenantLiensNavigations = styled.ul`
display: flex;
justify-content: space-evenly;
margin: 0;
padding: 0;
height: 18vh;

@media (max-width: 700px) {
    flex-direction: column;
    position: relative;
    top: -18vh;
}
`
export const LienNavigation = styled.li`
list-style-type: none;
width: fit-content;
// border: solid 1px;
font-size: 4vw;
transform: perspective(1000px) rotateY(-40deg);
transform-origin: 100% 50%;
transition: transform 1000ms;
display: flex;
align-items: center;
background: #737373;
border: solid 0.2em transparent;

&:hover {
    transform: perspective(1000px) rotateY(0deg);
    transform-origin: 100% 50%;
    transition: transform 1000ms;
}

@media (max-width: 700px){
    transform: none;
    font-size: 3vw;
    width: 100%;
}
`