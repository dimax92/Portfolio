import styled, { keyframes } from "styled-components";
import mousePointer from "../components/hand-removebg-preview_20px.png";

const animationInput1 = keyframes`
from {
    transform: scaleX(0);
    transform-origin: 0% 100%;
}
to {
    transform: scaleX(1);
    transform-origin: 0% 100%;
}
`

const animationInput2 = keyframes`
from {
    transform: scaleX(0);
    transform-origin: 100% 0%;
}
to {
    transform: scaleX(1);
    transform-origin: 100% 0%;
}
`

const animationZoneTexte = keyframes`
from {
    transform: scaleX(0);
    transform-origin: 50% 0%;
}
to {
    transform: scaleX(1);
    transform-origin: 50% 0%;
}
`

const animationButton = keyframes`
0% {
    width: 0px;
    height: 0px;
}
50% {
    width: 300px;
    height: 150px;
}
100% {
    width: 0px;
    height: 0px;
}
`

const animationButtonNouveau = keyframes`
0% {
    transform: scale(0);
}
50% {
    transform: scale(1.5);
}
100% {
    transform: scale(0);
}
`

export const Formulaire = styled.form`
position: absolute;
top: 33vh;
height: 67vh;
width: 100vw;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;

@media (max-width: 700px){
    top: 5vh;
    height: 85vh;
    padding: 5vh 0vw;
}
`

export const Input1 = styled.input`
width: 90%;
height: 5%;
outline: none;
border: none;
transform: scaleX(1);
transform-origin: 0% 100%;
transition: transform 1000ms;
animation: ${animationInput1} 2s linear forwards;
`

export const Input2 = styled.input`
width: 90%;
height: 5%;
outline: none;
border: none;
transform: scaleX(1);
transform-origin: 100% 0%;
transition: transform 1000ms;
animation: ${animationInput2} 2s linear forwards;
`

export const ZoneTexte = styled.textarea`
width: 90%;
height: 40%;
outline: none;
border: none;
resize: none;
transform: scaleX(1);
transform-origin: 50% 0%;
transition: transform 1000ms;
animation: ${animationZoneTexte} 2s linear forwards;
`

export const GlisserFichier = styled.div`
width: 90%;
height: 20%;
border: ridge 1px white;
background: #dbdbdb38;
color: white;
display: flex;
align-items: center;
justify-content: center;
font-size: 2vw;
`

export const Bouton = styled.button`
display: flex;
height: 100px;
width: 200px;
flex-direction: column;
align-items: center;
justify-content: center;
`

export const BoutonDiv = styled.div`
display: flex;
height: 100px;
width: 200px;
flex-direction: column;
align-items: center;
justify-content: center;
`

export const AnimationBouton = styled.div`
width: 300px;
height: 150px;
position: absolute;
border: solid;
filter: blur(5px);
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
animation: ${animationButton} 3s linear infinite;
`

export const SousDivBouton = styled.div`
width: 50%;
height: 10%;
display: flex;
align-items: center;
justify-content: center;
background: #646363;
color: white;
font-weight: bold;
font-size: 2vw;
`

export const BoutonNouveau = styled.button`
width: 50%;
height: 10%;
padding: 0;
position: absolute;
bottom: 2vh;
background: rgba(255, 0, 0, 0);
cursor: url(${mousePointer}), pointer;

@media (max-width: 700px){
    bottom: 7vh;
}
`

export const AnimationBoutonNouveau = styled.div`
width: 50%;
height: 10%;
bottom: 2vh;
position: absolute;
border: white solid;
filter: blur(5px);
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
transform: scale(1.5);
animation: ${animationButtonNouveau} 3s linear infinite;

@media (max-width: 700px){
    bottom: 7vh;
}
`

export const DivReponse = styled.div`
height: 100vh;
width: 100vw;
position: fixed;
z-index: 3;
display: none;
flex-direction: column;
justify-content: center;
align-items: center;
color: white;
font-weight: bold;
font-size: 4em;
`