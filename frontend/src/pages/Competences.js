import React from "react"
import { DivPrincipal, TitreCompetences } from "../style/titre"
import ThreeScene from "../components/ThreeScene"
import CylindreCompetences from "../components/Competences"
import { DivCylindreCompetences } from "../style/competences"

function Competences(){
    return(
        <DivPrincipal style={{
            justifyContent: "center",
            height: "100vh"
        }}>
            <TitreCompetences width="327" height="54" viewBox="0 0 327 54" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M31.9773 15.8608C31.7524 14.5587 31.3026 13.2211 30.6278 11.848C29.9531 10.4631 29.0417 9.17874 27.8935 7.99503C26.7453 6.79948 25.3544 5.83476 23.7209 5.10085C22.0874 4.36695 20.1993 4 18.0568 4C15.0739 4 12.4519 4.78125 10.1911 6.34375C7.93016 7.90625 6.16643 10.0902 4.89986 12.8956C3.63329 15.701 3 18.9621 3 22.679C3 26.3958 3.63329 29.657 4.89986 32.4624C6.16643 35.2678 7.93016 37.4517 10.1911 39.0142C12.4519 40.5767 15.0739 41.358 18.0568 41.358C20.1993 41.358 22.0874 40.991 23.7209 40.2571C25.3544 39.5114 26.7453 38.5407 27.8935 37.3452C29.0417 36.1496 29.9531 34.8653 30.6278 33.4922C31.3026 32.1072 31.7524 30.7756 31.9773 29.4972" stroke="url(#paint0_linear_0_1)" stroke-width="6"/>
<path d="M49.9993 41.429C47.8568 41.429 45.9332 40.8134 44.2287 39.5824C42.5241 38.3395 41.1747 36.6527 40.1804 34.522C39.1979 32.3795 38.7067 29.9706 38.7067 27.2955C38.7067 24.6084 39.1979 22.1996 40.1804 20.0689C41.1747 17.9382 42.5241 16.2573 44.2287 15.0263C45.9332 13.7834 47.8568 13.1619 49.9993 13.1619C52.1418 13.1619 54.0594 13.7834 55.7521 15.0263C57.4567 16.2692 58.8061 17.956 59.8004 20.0866C60.7947 22.2173 61.2919 24.6203 61.2919 27.2955C61.2919 29.9706 60.7947 32.3795 59.8004 34.522C58.8179 36.6527 57.4744 38.3395 55.7699 39.5824C54.0653 40.8134 52.1418 41.429 49.9993 41.429Z" stroke="url(#paint1_linear_0_1)" stroke-width="6"/>
<path d="M69.2953 13.5881V40.8608H70.4316V22.5369C70.4316 20.9508 70.7157 19.5421 71.2839 18.3111C71.8639 17.08 72.7044 16.1153 73.8052 15.4169C74.9179 14.7185 76.2792 14.3693 77.889 14.3693C80.3038 14.3693 82.0557 15.1269 83.1447 16.6421C84.2337 18.1572 84.7782 20.1222 84.7782 22.5369V40.8608H85.9146V22.5369C85.9146 20.1577 86.5538 18.2046 87.8322 16.6776C89.1106 15.1387 90.9572 14.3693 93.372 14.3693C95.7868 14.3693 97.5387 15.1269 98.6277 16.6421C99.7167 18.1572 100.261 20.1222 100.261 22.5369V43.8608" stroke="url(#paint2_linear_0_1)" stroke-width="6"/>
<path d="M109.5 53.0881V10" stroke="url(#paint11_linear_0_1)" stroke-width="6"/>
<path d="M110.18 20.5483H110.322C110.819 19.0331 111.511 17.7251 112.399 16.6243C113.287 15.5234 114.335 14.6711 115.542 14.0674C116.761 13.4637 118.099 13.1619 119.555 13.1619C121.709 13.1619 123.567 13.7833 125.13 15.0262C126.704 16.2573 127.918 17.9382 128.77 20.0689C129.634 22.1995 130.066 24.6084 130.066 27.2954C130.066 29.9706 129.634 32.3735 128.77 34.5042C127.906 36.6349 126.687 38.3217 125.112 39.5646C123.538 40.8075 121.685 41.4289 119.555 41.4289C118.111 41.4289 116.779 41.133 115.56 40.5412C114.34 39.9375 113.281 39.0852 112.381 37.9843C111.482 36.8716 110.795 35.5577 110.322 34.0426H110.18" stroke="url(#paint3_linear_0_1)" stroke-width="6"/>
<path d="M137.764 28.3636H159.639V27.2273C159.639 25.4635 159.355 23.8063 158.787 22.2557C158.231 20.6932 157.449 19.3141 156.443 18.1186C155.437 16.923 154.253 15.9879 152.892 15.3132C151.543 14.6385 150.075 14.3011 148.489 14.3011C146.346 14.3011 144.423 14.9226 142.718 16.1655C141.013 17.4084 139.664 19.0952 138.67 21.2258C137.687 23.3565 137.196 25.7595 137.196 28.4346C137.196 31.1098 137.687 33.5128 138.67 35.6434C139.652 37.7741 141.031 39.4609 142.807 40.7038C144.594 41.9467 146.678 42.5682 149.057 42.5682C150.832 42.5682 152.348 42.2604 153.602 41.6449C154.857 41.0293 155.887 40.3014 156.692 39.4609C157.497 38.6205 158.1 37.857 158.503 37.1704" stroke="url(#paint4_linear_0_1)" stroke-width="6"/>
<path d="M145 8L151.786 3.07953" stroke="url(#paint12_linear_0_1)" stroke-width="6"/>
<path d="M172.794 9.05399V37.108C172.794 38.1733 173.031 39.0907 173.505 39.8601C173.978 40.6177 174.605 41.2036 175.387 41.6179C176.168 42.0204 177.008 42.2216 177.908 42.2216C178.251 42.2216 178.565 42.192 178.849 42.1328C179.145 42.0736 179.447 41.9849 179.755 41.8665" stroke="url(#paint5_linear_0_1)" stroke-width="6"/>
<path d="M181.476 17.7244H166.681" stroke="url(#paint13_linear_0_1)" stroke-width="6"/>
<path d="M186.978 28.2244H208.853V27.0881C208.853 25.3243 208.569 23.6671 208.001 22.1165C207.444 20.554 206.663 19.1749 205.657 17.9794C204.651 16.7839 203.467 15.8487 202.106 15.174C200.756 14.4993 199.289 14.1619 197.702 14.1619C195.56 14.1619 193.636 14.7834 191.932 16.0263C190.227 17.2692 188.878 18.956 187.884 21.0866C186.901 23.2173 186.41 25.6203 186.41 28.2955C186.41 30.9706 186.901 33.3736 187.884 35.5043C188.866 37.6349 190.245 39.3217 192.021 40.5646C193.808 41.8075 195.891 42.429 198.271 42.429C200.046 42.429 201.561 42.1212 202.816 41.5057C204.071 40.8901 205.101 40.1622 205.906 39.3217C206.71 38.4813 207.314 37.7178 207.717 37.0312" stroke="url(#paint6_linear_0_1)" stroke-width="6"/>
<path d="M218.901 14.5881V41.8608H220.037V23.5369C220.037 21.9508 220.392 20.5421 221.102 19.3111C221.825 18.08 222.807 17.1153 224.05 16.4169C225.305 15.7185 226.737 15.3693 228.347 15.3693C230.762 15.3693 232.727 16.1269 234.242 17.6421C235.757 19.1572 236.514 21.1222 236.514 23.5369V44.8608" stroke="url(#paint7_linear_0_1)" stroke-width="6"/>
<path d="M266.85 23.5426C266.578 21.8854 265.98 20.4294 265.057 19.1747C264.133 17.9081 262.985 16.9257 261.612 16.2273C260.251 15.517 258.753 15.1619 257.12 15.1619C254.906 15.1619 252.935 15.7834 251.207 17.0263C249.491 18.2692 248.141 19.9619 247.159 22.1044C246.176 24.2351 245.685 26.6321 245.685 29.2955C245.685 31.9825 246.176 34.3913 247.159 36.522C248.153 38.6527 249.509 40.3395 251.225 41.5824C252.953 42.8134 254.918 43.429 257.12 43.429C258.777 43.429 260.298 43.0798 261.683 42.3814C263.068 41.6712 264.222 40.6768 265.145 39.3984C266.069 38.12 266.661 36.6226 266.921 34.9062" stroke="url(#paint8_linear_0_1)" stroke-width="6"/>
<path d="M275.978 29.2244H297.853V28.0881C297.853 26.3243 297.569 24.6671 297.001 23.1165C296.444 21.554 295.663 20.1749 294.657 18.9794C293.651 17.7839 292.467 16.8487 291.106 16.174C289.756 15.4993 288.289 15.1619 286.702 15.1619C284.56 15.1619 282.636 15.7834 280.932 17.0263C279.227 18.2692 277.878 19.956 276.884 22.0866C275.901 24.2173 275.41 26.6203 275.41 29.2955C275.41 31.9706 275.901 34.3736 276.884 36.5043C277.866 38.6349 279.245 40.3217 281.021 41.5646C282.808 42.8075 284.891 43.429 287.271 43.429C289.046 43.429 290.561 43.1212 291.816 42.5057C293.071 41.8901 294.101 41.1622 294.906 40.3217C295.71 39.4813 296.314 38.7178 296.717 38.0312" stroke="url(#paint9_linear_0_1)" stroke-width="6"/>
<path d="M322.012 21.625C321.645 20.4413 321.13 19.4588 320.467 18.6776C319.816 17.8845 319.017 17.2926 318.07 16.902C317.123 16.4995 316.022 16.2983 314.767 16.2983C312.589 16.2983 310.826 16.8546 309.476 17.9673C308.127 19.0682 307.452 20.5241 307.452 22.3352C307.452 23.7675 307.908 24.969 308.819 25.9396C309.743 26.9103 311.133 27.6264 312.992 28.0881L317.253 29.1534C319.254 29.6506 320.769 30.491 321.799 31.6747C322.84 32.8584 323.361 34.2907 323.361 35.9716C323.361 37.4512 322.971 38.7533 322.189 39.8778C321.42 41.0024 320.355 41.8783 318.993 42.5057C317.632 43.1212 316.058 43.429 314.27 43.429C311.844 43.429 309.861 42.8371 308.322 41.6534C306.783 40.4697 305.783 38.7888 305.321 36.6108" stroke="url(#paint10_linear_0_1)" stroke-width="6"/>
<defs>
<linearGradient id="paint0_linear_0_1" x1="17.4886" y1="4" x2="17.4886" y2="41.358" gradientUnits="userSpaceOnUse">
<stop stop-color="#C0C0C0"/>
<stop offset="0.25" stop-color="#D5D5D5"/>
<stop offset="0.5" stop-color="#C0C0C0"/>
<stop offset="0.75" stop-color="#D5D4D4"/>
<stop offset="1" stop-color="#C0C0C0"/>
</linearGradient>
<linearGradient id="paint1_linear_0_1" x1="49.9993" y1="13.1619" x2="49.9993" y2="41.429" gradientUnits="userSpaceOnUse">
<stop stop-color="#C0C0C0"/>
<stop offset="0.25" stop-color="#D5D5D5"/>
<stop offset="0.5" stop-color="#C0C0C0"/>
<stop offset="0.75" stop-color="#D5D4D4"/>
<stop offset="1" stop-color="#C0C0C0"/>
</linearGradient>
<linearGradient id="paint2_linear_0_1" x1="84.7782" y1="13.5881" x2="84.7782" y2="43.8608" gradientUnits="userSpaceOnUse">
<stop stop-color="#C0C0C0"/>
<stop offset="0.25" stop-color="#D5D5D5"/>
<stop offset="0.5" stop-color="#C0C0C0"/>
<stop offset="0.75" stop-color="#D5D4D4"/>
<stop offset="1" stop-color="#C0C0C0"/>
</linearGradient>
<linearGradient id="paint3_linear_0_1" x1="120.123" y1="13.1619" x2="120.123" y2="41.4289" gradientUnits="userSpaceOnUse">
<stop stop-color="#C0C0C0"/>
<stop offset="0.25" stop-color="#D5D5D5"/>
<stop offset="0.5" stop-color="#C0C0C0"/>
<stop offset="0.75" stop-color="#D5D4D4"/>
<stop offset="1" stop-color="#C0C0C0"/>
</linearGradient>
<linearGradient id="paint4_linear_0_1" x1="148.418" y1="14.3011" x2="148.418" y2="42.5682" gradientUnits="userSpaceOnUse">
<stop stop-color="#C0C0C0"/>
<stop offset="0.25" stop-color="#D5D5D5"/>
<stop offset="0.5" stop-color="#C0C0C0"/>
<stop offset="0.75" stop-color="#D5D4D4"/>
<stop offset="1" stop-color="#C0C0C0"/>
</linearGradient>
<linearGradient id="paint5_linear_0_1" x1="176.274" y1="9.05399" x2="176.274" y2="42.2216" gradientUnits="userSpaceOnUse">
<stop stop-color="#C0C0C0"/>
<stop offset="0.25" stop-color="#D5D5D5"/>
<stop offset="0.5" stop-color="#C0C0C0"/>
<stop offset="0.75" stop-color="#D5D4D4"/>
<stop offset="1" stop-color="#C0C0C0"/>
</linearGradient>
<linearGradient id="paint6_linear_0_1" x1="197.631" y1="14.1619" x2="197.631" y2="42.429" gradientUnits="userSpaceOnUse">
<stop stop-color="#C0C0C0"/>
<stop offset="0.25" stop-color="#D5D5D5"/>
<stop offset="0.5" stop-color="#C0C0C0"/>
<stop offset="0.75" stop-color="#D5D4D4"/>
<stop offset="1" stop-color="#C0C0C0"/>
</linearGradient>
<linearGradient id="paint7_linear_0_1" x1="227.708" y1="14.5881" x2="227.708" y2="44.8608" gradientUnits="userSpaceOnUse">
<stop stop-color="#C0C0C0"/>
<stop offset="0.25" stop-color="#D5D5D5"/>
<stop offset="0.5" stop-color="#C0C0C0"/>
<stop offset="0.75" stop-color="#D5D4D4"/>
<stop offset="1" stop-color="#C0C0C0"/>
</linearGradient>
<linearGradient id="paint8_linear_0_1" x1="256.303" y1="15.1619" x2="256.303" y2="43.429" gradientUnits="userSpaceOnUse">
<stop stop-color="#C0C0C0"/>
<stop offset="0.25" stop-color="#D5D5D5"/>
<stop offset="0.5" stop-color="#C0C0C0"/>
<stop offset="0.75" stop-color="#D5D4D4"/>
<stop offset="1" stop-color="#C0C0C0"/>
</linearGradient>
<linearGradient id="paint9_linear_0_1" x1="286.631" y1="15.1619" x2="286.631" y2="43.429" gradientUnits="userSpaceOnUse">
<stop stop-color="#C0C0C0"/>
<stop offset="0.25" stop-color="#D5D5D5"/>
<stop offset="0.5" stop-color="#C0C0C0"/>
<stop offset="0.75" stop-color="#D5D4D4"/>
<stop offset="1" stop-color="#C0C0C0"/>
</linearGradient>
<linearGradient id="paint10_linear_0_1" x1="314.341" y1="16.2983" x2="314.341" y2="43.429" gradientUnits="userSpaceOnUse">
<stop stop-color="#C0C0C0"/>
<stop offset="0.25" stop-color="#D5D5D5"/>
<stop offset="0.5" stop-color="#C0C0C0"/>
<stop offset="0.75" stop-color="#D5D4D4"/>
<stop offset="1" stop-color="#C0C0C0"/>
</linearGradient>
<linearGradient id="paint11_linear_0_1" x1="110" y1="10" x2="110" y2="53.0881" gradientUnits="userSpaceOnUse">
<stop stop-color="#C0C0C0"/>
<stop offset="0.25" stop-color="#D5D5D5"/>
<stop offset="0.5" stop-color="#C0C0C0"/>
<stop offset="0.75" stop-color="#D5D4D4"/>
<stop offset="1" stop-color="#C0C0C0"/>
</linearGradient>
<linearGradient id="paint12_linear_0_1" x1="148.393" y1="3.07953" x2="148.393" y2="8" gradientUnits="userSpaceOnUse">
<stop stop-color="#C0C0C0"/>
<stop offset="0.25" stop-color="#D5D5D5"/>
<stop offset="0.5" stop-color="#C0C0C0"/>
<stop offset="0.75" stop-color="#D5D4D4"/>
<stop offset="1" stop-color="#C0C0C0"/>
</linearGradient>
<linearGradient id="paint13_linear_0_1" x1="174.078" y1="17.7244" x2="174.078" y2="18.7244" gradientUnits="userSpaceOnUse">
<stop stop-color="#C0C0C0"/>
<stop offset="0.25" stop-color="#D5D5D5"/>
<stop offset="0.5" stop-color="#C0C0C0"/>
<stop offset="0.75" stop-color="#D5D4D4"/>
<stop offset="1" stop-color="#C0C0C0"/>
</linearGradient>
</defs>
</TitreCompetences>
            <ThreeScene></ThreeScene>
            <DivCylindreCompetences>
                <CylindreCompetences></CylindreCompetences>
            </DivCylindreCompetences>
        </DivPrincipal>
    )
}

export default Competences