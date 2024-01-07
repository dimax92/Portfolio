import styled from "styled-components";

export const DivContact = styled.div`
position: absolute;
top: 18vh;
display: flex;
flex-direction: column;
align-items: center;
height: 82vh;
justify-content: space-evenly;
width: 100%;

@media (max-width: 700px) {
    top: 5vh;
    height: 95vh;
}
`

export const DivContactParagraphe = styled.div`
width: 80%;
background: #ffffff4d;
border-radius: 2em;
`

export const ParagrapheContactTitre = styled.div`
font-size: 1.3em;
font-weight: bold;
color: #ffffff7a;
margin: 2vh 0;
`

export const ParagrapheContactTexte = styled.div`
font-weight: bold;
margin: 2vh 0;
`