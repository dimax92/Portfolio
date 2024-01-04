import styled, { keyframes } from "styled-components";
import { useSelector } from "react-redux";
import mouse from "../components/arrow-removebg-preview_20px.png"

const CanvasHeight = () => { return useSelector((state) => state.canvasHeight-state.divPrincipalHeight-50) };
const PositionXMouse = () => { return useSelector((state) => state.positionXMouse) };

export const DivPrincipal = styled.div`
cursor: url(${mouse}), auto;
display: flex;
flex-direction: column;
align-items: center;
`

export const DivSecondaire = styled.div`
position: absolute;
top: 18vh;
display: flex;
flex-direction: column;
align-items: center;
width: 100%;

@media (max-width: 700px){
    top: 5vh;
}
`

const animationLetter = keyframes`
  to {
        stroke-dashoffset: 0;
    }
`

const animationPoint = keyframes`
to {
    visibility: visible; 
}
`

export const TitreAccueil = styled.svg`
width: 50vw;
height: 22vh;
path:nth-child(1){
    stroke-dasharray: 150.30014038085938;
    stroke-dashoffset: 150.30014038085938;
    animation: ${animationLetter} 1.5s linear forwards;
}
path:nth-child(2){
    stroke-dasharray: 94.1837158203125;
    stroke-dashoffset: 94.1837158203125;
    animation: ${animationLetter} 0.94s linear forwards 1.5s;
}
path:nth-child(3){
    stroke-dasharray: 116.27928924560547;
    stroke-dashoffset: 116.27928924560547;
    animation: ${animationLetter} 1.16s linear forwards 2.44s;
}
path:nth-child(4){
    stroke-dasharray: 114.95645141601562;
    stroke-dashoffset: 114.95645141601562;
    animation: ${animationLetter} 1.14s linear forwards 3.6s;
}
path:nth-child(5){
    stroke-dasharray: 30.272701263427734;
    stroke-dashoffset: 30.272701263427734;
    animation: ${animationLetter} 0.3s linear forwards 4.74s;
}
path:nth-child(6){
    stroke-dasharray: 28.242773056030273;
    stroke-dashoffset: 28.242773056030273;
    visibility: hidden;
    animation: ${animationPoint} 0.5s linear forwards 5.04s;
}
path:nth-child(7){
    stroke-dasharray: 155.21774291992188;
    stroke-dashoffset: 155.21774291992188;
    animation: ${animationLetter} 1.55s linear forwards 5.53s;
}
path:nth-child(8){
    stroke-dasharray: 99.38442993164062;
    stroke-dashoffset: 99.38442993164062;
    animation: ${animationLetter} 0.99s linear forwards 7.08s;
}
path:nth-child(9){
    stroke-dasharray: 39.00605010986328;
    stroke-dashoffset: 39.00605010986328;
    animation: ${animationLetter} 0.39s linear forwards 8.07s;
}
path:nth-child(10){
    stroke-dasharray: 38.71046447753906;
    stroke-dashoffset: 38.71046447753906;
    animation: ${animationLetter} 0.39s linear forwards 8.46s;
}
`

export const TitreCompetences = styled.svg`
position: absolute;
top: 18vh;
z-index: 1;
width: 40vw;
height: 15vh;

@media (max-width: 700px){
    top: 0vh;
    z-index: 3;
    width: 80vw;
    height: 5vh;
    right: 0vw;
}

path:nth-child(1){
    stroke-dasharray: 93.63868713378906;
    stroke-dashoffset: 93.63868713378906;
    animation: ${animationLetter} 0.93s linear forwards;
}
path:nth-child(2){
    stroke-dasharray: 80.55724334716797;
    stroke-dashoffset: 80.55724334716797;
    animation: ${animationLetter} 0.8s linear forwards 0.93s;
}
path:nth-child(3){
    stroke-dasharray: 155.2186737060547;
    stroke-dashoffset: 155.2186737060547;
    animation: ${animationLetter} 1.55s linear forwards 1.73s;
}
path:nth-child(4){
    stroke-dasharray: 43.37209701538086;
    stroke-dashoffset: 43.37209701538086;
    animation: ${animationLetter} 0.43s linear forwards 3.28s;
}
path:nth-child(5){
    stroke-dasharray: 65.03532409667969;
    stroke-dashoffset: 65.03532409667969;
    animation: ${animationLetter} 0.65s linear forwards 3.71s;
}
path:nth-child(6){
    stroke-dasharray: 94.32595825195312;
    stroke-dashoffset: 94.32595825195312;
    animation: ${animationLetter} 0.94s linear forwards 4.36s;
}
path:nth-child(7){
    stroke-dasharray: 8.382169723510742;
    stroke-dashoffset: 8.382169723510742;
    animation: ${animationLetter} 0.08s linear forwards 5.3s;
}
path:nth-child(8){
    stroke-dasharray: 38.04942321777344;
    stroke-dashoffset: 38.04942321777344;
    animation: ${animationLetter} 0.38s linear forwards 5.38s;
}
path:nth-child(9){
    stroke-dasharray: 14.794998168945312;
    stroke-dashoffset: 14.794998168945312;
    animation: ${animationLetter} 0.15s linear forwards 5.76s;
}
path:nth-child(10){
    stroke-dasharray: 94.32579803466797;
    stroke-dashoffset: 94.32579803466797;
    animation: ${animationLetter} 0.94s linear forwards 5.9s;
}
path:nth-child(11){
    stroke-dasharray: 94.10459899902344;
    stroke-dashoffset: 94.10459899902344;
    animation: ${animationLetter} 0.94s linear forwards 6.84s;
}
path:nth-child(12){
    stroke-dasharray: 68.77240753173828;
    stroke-dashoffset: 68.77240753173828;
    animation: ${animationLetter} 0.69s linear forwards 7.78s;
}
path:nth-child(13){
    stroke-dasharray: 94.32584381103516;
    stroke-dashoffset: 94.32584381103516;
    animation: ${animationLetter} 0.94s linear forwards 8.46s;
}
path:nth-child(14){
    stroke-dasharray: 68.96041870117188;
    stroke-dashoffset: 68.96041870117188;
    animation: ${animationLetter} 0.69s linear forwards 9.4s;
}
`

export const TitreRealisations = styled.svg`
position: absolute;
top: 18vh;
z-index: 1;
width: 40vw;
height: 15vh;

@media (max-width: 700px){
    top: 0vh;
    z-index: 3;
    width: 80vw;
    height: 5vh;
    right: 0vw;
}

path:nth-child(1){
    stroke-dasharray: 90.11724090576172;
    stroke-dashoffset: 90.11724090576172;
    animation: ${animationLetter} 0.9s linear forwards;
}
path:nth-child(2){
    stroke-dasharray: 18.81300163269043;
    stroke-dashoffset: 18.81300163269043;
    animation: ${animationLetter} 0.19s linear forwards 0.9s;
}
path:nth-child(3){
    stroke-dasharray: 94.18374633789062;
    stroke-dashoffset: 94.18374633789062;
    animation: ${animationLetter} 0.94s linear forwards 1.08s;
}
path:nth-child(4){
    stroke-dasharray: 8.381768226623535;
    stroke-dashoffset: 8.381768226623535;
    animation: ${animationLetter} 0.08s linear forwards 2.02s;
}
path:nth-child(5){
    stroke-dasharray: 99.38385009765625;
    stroke-dashoffset: 99.38385009765625;
    animation: ${animationLetter} 0.99s linear forwards 2.1s;
}
path:nth-child(6){
    stroke-dasharray: 39.36363983154297;
    stroke-dashoffset: 39.36363983154297;
    animation: ${animationLetter} 0.39s linear forwards 3.09s;
}
path:nth-child(7){
    stroke-dasharray: 30.272701263427734;
    stroke-dashoffset: 30.272701263427734;
    animation: ${animationLetter} 0.3s linear forwards 3.48s;
}
path:nth-child(8){
    stroke-dasharray: 28.24266815185547;
    stroke-dashoffset: 28.24266815185547;
    visibility: hidden;
    animation: ${animationPoint} 0.28s linear forwards 3.78s;
}
path:nth-child(9){
    stroke-dasharray: 68.96022033691406;
    stroke-dashoffset: 68.96022033691406;
    animation: ${animationLetter} 0.69s linear forwards 4.27s;
}
path:nth-child(10){
    stroke-dasharray: 99.38439178466797;
    stroke-dashoffset: 99.38439178466797;
    animation: ${animationLetter} 0.99s linear forwards 4.95s;
}
path:nth-child(11){
    stroke-dasharray: 38.04941177368164;
    stroke-dashoffset: 38.04941177368164;
    animation: ${animationLetter} 0.38s linear forwards 5.94s;
}
path:nth-child(12){
    stroke-dasharray: 14.794998168945312;
    stroke-dashoffset: 14.794998168945312;
    animation: ${animationLetter} 0.15s linear forwards 6.32s;
}
path:nth-child(13){
    stroke-dasharray: 30.2726993560791;
    stroke-dashoffset: 30.2726993560791;
    animation: ${animationLetter} 0.3s linear forwards 6.46s;
}
path:nth-child(14){
    stroke-dasharray: 28.242813110351562;
    stroke-dashoffset: 28.242813110351562;
    visibility: hidden;
    animation: ${animationPoint} 0.28s linear forwards 6.76s;
}
path:nth-child(15){
    stroke-dasharray: 80.55723571777344;
    stroke-dashoffset: 80.55723571777344;
    animation: ${animationLetter} 0.8s linear forwards 7.25s;
}
path:nth-child(16){
    stroke-dasharray: 94.1046142578125;
    stroke-dashoffset: 94.1046142578125;
    animation: ${animationLetter} 0.94s linear forwards 8.05s;
}
path:nth-child(17){
    stroke-dasharray: 68.96040344238281;
    stroke-dashoffset: 68.96040344238281;
    animation: ${animationLetter} 0.69s linear forwards 8.99s;
}
`

export const TitreDevis = styled.svg`
position: absolute;
top: 18vh;
z-index: 1;
width: 40vw;
height: 15vh;

@media (max-width: 700px){
    top: 0vh;
    z-index: 3;
    width: 80vw;
    height: 5vh;
    right: 0vw;
}
path:nth-child(2){
    stroke-dasharray: 114.95626831054688;
    stroke-dashoffset: 114.95626831054688;
    animation: ${animationLetter} 1.14s linear forwards;
}
path:nth-child(3){
    stroke-dasharray: 94.1836929321289;
    stroke-dashoffset: 94.1836929321289;
    animation: ${animationLetter} 0.94s linear forwards 1.14s;
}
path:nth-child(1){
    stroke-dasharray: 59.47540283203125;
    stroke-dashoffset: 59.47540283203125;
    animation: ${animationLetter} 0.59s linear forwards 2.08s;
}
path:nth-child(4){
    stroke-dasharray: 30.272701263427734;
    stroke-dashoffset: 30.272701263427734;
    animation: ${animationLetter} 0.3s linear forwards 2.67s;
}
path:nth-child(5){
    stroke-dasharray: 28.24267578125;
    stroke-dashoffset: 28.24267578125;
    visibility: hidden;
    animation: ${animationPoint} 0.28s linear forwards 2.97s;
}
path:nth-child(6){
    stroke-dasharray: 68.96021270751953;
    stroke-dashoffset: 68.96021270751953;
    animation: ${animationLetter} 0.69s linear forwards 3.25s;
}
`