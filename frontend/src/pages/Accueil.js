import React, { useRef, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import { DivPrincipal, DivSecondaire, TitreAccueil } from "../style/titre";
import ThreeScene from "../components/ThreeScene";
import AvatarThree from "../components/AvatarThree";
import Texte from "../components/Texte";
function Accueil(){

    return(
        <DivPrincipal>
            <ThreeScene></ThreeScene>
            <DivSecondaire>
            <TitreAccueil width="252" height="44" viewBox="0 0 252 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 1.63635L13.0142 38H14.5767L23.8097 3.41192H23.9517L33.1847 38H34.7472L44.7614 1.63635" stroke="url(#paint0_linear_0_1)" stroke-width="6"/>
<path d="M50.3848 24.3636H72.2598V23.2273C72.2598 21.4636 71.9757 19.8064 71.4075 18.2557C70.8512 16.6932 70.0699 15.3142 69.0638 14.1186C68.0576 12.9231 66.8739 11.9879 65.5126 11.3132C64.1632 10.6385 62.6954 10.3011 61.1092 10.3011C58.9667 10.3011 57.0432 10.9226 55.3386 12.1655C53.6341 13.4084 52.2846 15.0952 51.2903 17.2259C50.3078 19.3565 49.8166 21.7595 49.8166 24.4347C49.8166 27.1099 50.3078 29.5128 51.2903 31.6435C52.2728 33.7742 53.6518 35.461 55.4274 36.7038C57.2148 37.9467 59.2981 38.5682 61.6774 38.5682C63.453 38.5682 64.9681 38.2604 66.2228 37.6449C67.4776 37.0294 68.5074 36.3014 69.3123 35.461C70.1173 34.6205 70.721 33.857 71.1234 33.1705" stroke="url(#paint1_linear_0_1)" stroke-width="6"/>
<path d="M82.1598 2.63635V39H83.2962V32.1818L82.0796 29.5C82.5767 31.0033 84.6279 34.9931 85.5156 36.1058C86.4034 37.2067 87.451 38.0589 88.6584 38.6626C89.8776 39.2663 91.2152 39.5682 92.6712 39.5682C94.8255 39.5682 96.684 38.9526 98.2465 37.7216C99.8208 36.4787 101.034 34.7919 101.886 32.6612C102.75 30.5305 103.183 28.1217 103.183 25.4346C103.183 22.7595 102.75 20.3565 101.886 18.2258C101.022 16.0952 99.8031 14.4084 98.2287 13.1655C96.6544 11.9226 94.8019 11.3011 92.6712 11.3011C91.2271 11.3011 89.8954 11.603 88.6762 12.2067C87.4569 12.7985 85.3975 13.6508 84.4979 14.7635C83.5983 15.8643 82.553 17.4848 82.0796 19" stroke="url(#paint2_linear_0_1)" stroke-width="6"/>
<path d="M113.043 40H122.56C126.123 40 129.159 39.2779 131.668 37.8338C134.19 36.3897 136.113 34.3063 137.439 31.5838C138.777 28.8494 139.451 25.5469 139.463 21.6761C139.475 17.9001 138.842 14.6686 137.563 11.9815C136.297 9.2945 134.468 7.23484 132.077 5.80255C129.697 4.35842 126.833 3.63635 123.483 3.63635H113.043V43" stroke="url(#paint3_linear_0_1)" stroke-width="6"/>
<path d="M148.075 43V12.7273" stroke="url(#paint4_linear_0_1)" stroke-width="6"/>
<path d="M148.08 10.5C146.723 10.5 145.543 9.9985 144.562 9.01761C143.581 8.03673 143.08 6.85623 143.08 5.49999C143.08 4.14376 143.581 2.96327 144.562 1.98239M148.08 10.5L144.562 1.98239M148.08 10.5C149.436 10.5 150.616 9.99849 151.597 9.01761C152.578 8.03673 153.08 6.85623 153.08 5.49999C153.08 4.14376 152.578 2.96327 151.597 1.98239C150.616 1.0015 149.436 0.5 148.08 0.5C146.723 0.5 145.543 1.0015 144.562 1.98239M148.08 10.5L144.915 2.33594L144.562 1.98239" fill="url(#paint5_linear_0_1)" stroke="url(#paint6_linear_0_1)"/>
<path d="M159.017 12.7273V40H160.153V21.6761C160.153 20.09 160.437 18.6813 161.005 17.4503C161.585 16.2192 162.426 15.2545 163.526 14.5561C164.639 13.8577 166 13.5085 167.61 13.5085C170.025 13.5085 171.777 14.2661 172.866 15.7812C173.955 17.2964 174.499 19.2614 174.499 21.6761V40H175.636V21.6761C175.636 19.2969 176.275 17.3437 177.553 15.8168C178.832 14.2779 180.678 13.5085 183.093 13.5085C185.508 13.5085 187.26 14.2661 188.349 15.7812C189.438 17.2964 189.982 19.2614 189.982 21.6761V43" stroke="url(#paint7_linear_0_1)" stroke-width="6"/>
<path d="M218.03 22.0313C218.03 22.7415 216.538 23.286 215.839 23.6648C215.141 24.0436 214.235 24.3277 213.123 24.5171C212.01 24.7065 210.826 24.8722 209.571 25.0142C207.476 25.2628 205.754 25.6238 204.404 26.0973C203.067 26.5708 202.025 27.139 201.279 27.8019C200.534 28.4647 200.013 29.2046 199.717 30.0213C199.421 30.8262 199.273 31.6904 199.273 32.6136C199.273 34.3182 199.652 35.7623 200.409 36.946C201.179 38.1297 202.191 39.0294 203.446 39.6449C204.712 40.2604 206.091 40.5682 207.583 40.5682C208.956 40.5682 210.228 40.3196 211.4 39.8225C212.584 39.3135 213.626 38.6032 214.525 37.6918C215.437 36.7685 216.08 35.5 216.745 34.4602H216.887V40H218.023V20.3977C218.023 19.2377 217.822 18.1664 217.419 17.184C217.017 16.2015 216.431 15.3492 215.662 14.6271C214.892 13.8932 213.957 13.3251 212.856 12.9226C211.767 12.5083 210.53 12.3011 209.145 12.3011C207.725 12.3011 206.405 12.5261 205.186 12.9759C203.967 13.4257 202.913 14.0649 202.025 14.8935C201.137 15.7221 200.48 16.7046 200.054 17.8409" stroke="url(#paint8_linear_0_1)" stroke-width="6"/>
<path d="M249.08 41.5L225.111 10.7273" stroke="url(#paint9_linear_0_1)" stroke-width="6"/>
<path d="M225.58 41.5L248.08 10" stroke="url(#paint10_linear_0_1)" stroke-width="6"/>
<defs>
<linearGradient id="paint0_linear_0_1" x1="23.8807" y1="1.63635" x2="23.8807" y2="38" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFD700"/>
<stop offset="0.25" stop-color="#FFEC84"/>
<stop offset="0.5" stop-color="#FFD700"/>
<stop offset="0.75" stop-color="#FBE676"/>
<stop offset="1" stop-color="#FFD702"/>
</linearGradient>
<linearGradient id="paint1_linear_0_1" x1="61.0382" y1="10.3011" x2="61.0382" y2="38.5682" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFD700"/>
<stop offset="0.25" stop-color="#FFEC84"/>
<stop offset="0.5" stop-color="#FFD700"/>
<stop offset="0.75" stop-color="#FBE676"/>
<stop offset="1" stop-color="#FFD702"/>
</linearGradient>
<linearGradient id="paint2_linear_0_1" x1="92.6311" y1="2.63635" x2="92.6311" y2="39.5682" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFD700"/>
<stop offset="0.25" stop-color="#FFEC84"/>
<stop offset="0.5" stop-color="#FFD700"/>
<stop offset="0.75" stop-color="#FBE676"/>
<stop offset="1" stop-color="#FFD702"/>
</linearGradient>
<linearGradient id="paint3_linear_0_1" x1="126.253" y1="3.63635" x2="126.253" y2="43" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFD700"/>
<stop offset="0.25" stop-color="#FFEC84"/>
<stop offset="0.5" stop-color="#FFD700"/>
<stop offset="0.75" stop-color="#FBE676"/>
<stop offset="1" stop-color="#FFD702"/>
</linearGradient>
<linearGradient id="paint4_linear_0_1" x1="148.575" y1="12.7273" x2="148.575" y2="43" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFD700"/>
<stop offset="0.25" stop-color="#FFEC84"/>
<stop offset="0.5" stop-color="#FFD700"/>
<stop offset="0.75" stop-color="#FBE676"/>
<stop offset="1" stop-color="#FFD702"/>
</linearGradient>
<linearGradient id="paint5_linear_0_1" x1="148.08" y1="1" x2="148.08" y2="10" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFD700"/>
<stop offset="0.25" stop-color="#FFEC84"/>
<stop offset="0.5" stop-color="#FFD700"/>
<stop offset="0.75" stop-color="#FBE676"/>
<stop offset="1" stop-color="#FFD702"/>
</linearGradient>
<linearGradient id="paint6_linear_0_1" x1="148.08" y1="1" x2="148.08" y2="10" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFD700"/>
<stop offset="0.25" stop-color="#FFEC84"/>
<stop offset="0.5" stop-color="#FFD700"/>
<stop offset="0.75" stop-color="#FBE676"/>
<stop offset="1" stop-color="#FFD702"/>
</linearGradient>
<linearGradient id="paint7_linear_0_1" x1="174.499" y1="12.7273" x2="174.499" y2="43" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFD700"/>
<stop offset="0.25" stop-color="#FFEC84"/>
<stop offset="0.5" stop-color="#FFD700"/>
<stop offset="0.75" stop-color="#FBE676"/>
<stop offset="1" stop-color="#FFD702"/>
</linearGradient>
<linearGradient id="paint8_linear_0_1" x1="208.651" y1="12.3011" x2="208.651" y2="40.5682" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFD700"/>
<stop offset="0.25" stop-color="#FFEC84"/>
<stop offset="0.5" stop-color="#FFD700"/>
<stop offset="0.75" stop-color="#FBE676"/>
<stop offset="1" stop-color="#FFD702"/>
</linearGradient>
<linearGradient id="paint9_linear_0_1" x1="237.095" y1="10.7273" x2="237.095" y2="41.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFD700"/>
<stop offset="0.25" stop-color="#FFEC84"/>
<stop offset="0.5" stop-color="#FFD700"/>
<stop offset="0.75" stop-color="#FBE676"/>
<stop offset="1" stop-color="#FFD702"/>
</linearGradient>
<linearGradient id="paint10_linear_0_1" x1="236.83" y1="10" x2="236.83" y2="41.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFD700"/>
<stop offset="0.25" stop-color="#FFEC84"/>
<stop offset="0.5" stop-color="#FFD700"/>
<stop offset="0.75" stop-color="#FBE676"/>
<stop offset="1" stop-color="#FFD702"/>
</linearGradient>
</defs>
</TitreAccueil>

                <AvatarThree></AvatarThree>
                <Texte></Texte>
            </DivSecondaire>
        </DivPrincipal>  
    )
}

export default Accueil