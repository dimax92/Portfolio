import styled, { createGlobalStyle, keyframes } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'Press Start 2P';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/pressstart2p/v15/e3t4euO8T-267oIAQAu6jDQyK3nVivM.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

@keyframes cursor {
    50% { color: transparent }
}
`
export const Paragraphe = styled.p`
font-size: 1.4em;
color: white;
font-family: 'Press Start 2P', cursive;
margin: 0;
`
export const TextPrincipal = styled.span`
font-family: 'Press Start 2P', cursive;
`
export const TraitUnion = styled.span`
position: relative;
left: -20px;
font-weight: bold;
`