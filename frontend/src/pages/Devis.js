import React, { useRef } from "react"
import {useDispatch, useSelector} from "react-redux";
import { DivPrincipal, TitreDevis } from "../style/titre"
import { AnimationBouton, AnimationBoutonNouveau, Bouton, BoutonDiv, BoutonNouveau, DivReponse, Formulaire, GlisserFichier, Input1, Input2, SousDivBouton, ZoneTexte } from "../style/devis"
import ThreeScene from "../components/ThreeScene"
import axios from "axios"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

function Devis(){
    const dispatch = useDispatch();
    const isFichier = useSelector((state)=>state.isFichier);
    const inputFichierRef = useRef(null);
    const inputNomRef = useRef(null);
    const inputMailRef = useRef(null);
    const inputDescriptionRef = useRef(null);
    const divReponseRef = useRef(null);
    const iconBonneReponseRef = useRef(null);
    const iconMauvaiseReponseRef = useRef(null);
    const texteBonneReponseRef = useRef(null);
    const texteMauvaiseReponseRef = useRef(null);
    
    async function envoiDonnees(addresse){
        const formData = new FormData();
        if(inputFichierRef.current.files[0]){
            formData.append('file', inputFichierRef.current.files[0]);
        }
        formData.append('nom', inputNomRef.current.value);
        formData.append('mail', inputMailRef.current.value);
        formData.append('description', inputDescriptionRef.current.value);
        await axios.post(addresse, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(function (response) {
            iconBonneReponseRef.current.style.display = 'initial';
            divReponseRef.current.style.display = 'flex';
            divReponseRef.current.style.background = 'green';
            texteBonneReponseRef.current.style.display = 'initial';
        })
        .catch(function (error) {
            iconMauvaiseReponseRef.current.style.display = 'initial';
            divReponseRef.current.style.display = 'flex';
            divReponseRef.current.style.background = 'red';
            texteMauvaiseReponseRef.current.style.display = 'initial';
        });
    }
    return(
        <DivPrincipal>
            <TitreDevis width="135" height="44" viewBox="0 0 135 44" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M91.5796 12.7273L81.8494 40H80.2869L70.5568 12.7273" stroke="url(#paint0_linear_0_1)" stroke-width="6"/>
  <path d="M3.46307 40H12.9801C16.5431 40 19.5793 39.2779 22.0888 37.8338C24.6101 36.3897 26.5336 34.3063 27.8594 31.5838C29.197 28.8494 29.8717 25.5469 29.8835 21.6761C29.8954 17.9001 29.2621 14.6686 27.9837 11.9815C26.7171 9.2945 24.8883 7.23484 22.4972 5.80255C20.1179 4.35842 17.2533 3.63635 13.9034 3.63635H3.46307V43" stroke="url(#paint1_linear_0_1)" stroke-width="6"/>
  <path d="M40.8052 26.3636H62.6802V25.2273C62.6802 23.4636 62.3961 21.8064 61.8279 20.2557C61.2716 18.6932 60.4903 17.3142 59.4842 16.1186C58.478 14.9231 57.2943 13.9879 55.9331 13.3132C54.5836 12.6385 53.1158 12.3011 51.5296 12.3011C49.3871 12.3011 47.4636 12.9226 45.759 14.1655C44.0545 15.4084 42.7051 17.0952 41.7108 19.2259C40.7283 21.3565 40.237 23.7595 40.237 26.4347C40.237 29.1099 40.7283 31.5128 41.7108 33.6435C42.6932 35.7742 44.0723 37.461 45.8478 38.7038C47.6352 39.9467 49.7186 40.5682 52.0978 40.5682C53.8734 40.5682 55.3885 40.2604 56.6433 39.6449C57.898 39.0294 58.9278 38.3014 59.7328 37.461C60.5377 36.6205 61.1414 35.857 61.5439 35.1705" stroke="url(#paint2_linear_0_1)" stroke-width="6"/>
  <path d="M101.495 43V12.7273" stroke="url(#paint3_linear_0_1)" stroke-width="6"/>
  <path d="M101.5 11.5C100.144 11.5 98.9633 10.9985 97.9824 10.0176C97.0015 9.03673 96.5 7.85623 96.5 6.49999C96.5 5.14376 97.0015 3.96327 97.9824 2.98239M101.5 11.5L97.9824 2.98239M101.5 11.5C102.856 11.5 104.037 10.9985 105.018 10.0176C105.999 9.03673 106.5 7.85623 106.5 6.49999C106.5 5.14376 105.999 3.96327 105.018 2.98239C104.037 2.0015 102.856 1.5 101.5 1.5C100.144 1.5 98.9633 2.0015 97.9824 2.98239M101.5 11.5L98.3359 3.33594L97.9824 2.98239" fill="url(#paint4_linear_0_1)" stroke="url(#paint5_linear_0_1)"/>
  <path d="M130.012 18.625C129.645 17.4413 129.13 16.4588 128.467 15.6776C127.816 14.8845 127.017 14.2926 126.07 13.902C125.123 13.4995 124.022 13.2983 122.767 13.2983C120.589 13.2983 118.826 13.8546 117.476 14.9673C116.127 16.0682 115.452 17.5241 115.452 19.3352C115.452 20.7675 115.908 21.969 116.819 22.9396C117.743 23.9103 119.133 24.6264 120.992 25.0881L125.253 26.1534C127.254 26.6506 128.769 27.491 129.799 28.6747C130.84 29.8584 131.361 31.2907 131.361 32.9716C131.361 34.4512 130.971 35.7533 130.189 36.8778C129.42 38.0024 128.355 38.8783 126.993 39.5057C125.632 40.1212 124.058 40.429 122.27 40.429C119.844 40.429 117.861 39.8371 116.322 38.6534C114.783 37.4697 113.783 35.7888 113.321 33.6108" stroke="url(#paint6_linear_0_1)" stroke-width="6"/>
  <defs>
  <linearGradient id="paint0_linear_0_1" x1="81.0682" y1="12.7273" x2="81.0682" y2="40" gradientUnits="userSpaceOnUse">
  <stop stop-color="#C0C0C0"/>
  <stop offset="0.25" stop-color="#D5D5D5"/>
  <stop offset="0.5" stop-color="#C0C0C0"/>
  <stop offset="0.75" stop-color="#D5D4D4"/>
  <stop offset="1" stop-color="#C0C0C0"/>
  </linearGradient>
  <linearGradient id="paint1_linear_0_1" x1="16.6734" y1="3.63635" x2="16.6734" y2="43" gradientUnits="userSpaceOnUse">
  <stop stop-color="#C0C0C0"/>
  <stop offset="0.25" stop-color="#D5D5D5"/>
  <stop offset="0.5" stop-color="#C0C0C0"/>
  <stop offset="0.75" stop-color="#D5D4D4"/>
  <stop offset="1" stop-color="#C0C0C0"/>
  </linearGradient>
  <linearGradient id="paint2_linear_0_1" x1="51.4586" y1="12.3011" x2="51.4586" y2="40.5682" gradientUnits="userSpaceOnUse">
  <stop stop-color="#C0C0C0"/>
  <stop offset="0.25" stop-color="#D5D5D5"/>
  <stop offset="0.5" stop-color="#C0C0C0"/>
  <stop offset="0.75" stop-color="#D5D4D4"/>
  <stop offset="1" stop-color="#C0C0C0"/>
  </linearGradient>
  <linearGradient id="paint3_linear_0_1" x1="101.995" y1="12.7273" x2="101.995" y2="43" gradientUnits="userSpaceOnUse">
  <stop stop-color="#C0C0C0"/>
  <stop offset="0.25" stop-color="#D5D5D5"/>
  <stop offset="0.5" stop-color="#C0C0C0"/>
  <stop offset="0.75" stop-color="#D5D4D4"/>
  <stop offset="1" stop-color="#C0C0C0"/>
  </linearGradient>
  <linearGradient id="paint4_linear_0_1" x1="101.5" y1="2" x2="101.5" y2="11" gradientUnits="userSpaceOnUse">
  <stop stop-color="#C0C0C0"/>
  <stop offset="0.25" stop-color="#D5D5D5"/>
  <stop offset="0.5" stop-color="#C0C0C0"/>
  <stop offset="0.75" stop-color="#D5D4D4"/>
  <stop offset="1" stop-color="#C0C0C0"/>
  </linearGradient>
  <linearGradient id="paint5_linear_0_1" x1="101.5" y1="2" x2="101.5" y2="11" gradientUnits="userSpaceOnUse">
  <stop stop-color="#C0C0C0"/>
  <stop offset="0.25" stop-color="#D5D5D5"/>
  <stop offset="0.5" stop-color="#C0C0C0"/>
  <stop offset="0.75" stop-color="#D5D4D4"/>
  <stop offset="1" stop-color="#C0C0C0"/>
  </linearGradient>
  <linearGradient id="paint6_linear_0_1" x1="122.341" y1="13.2983" x2="122.341" y2="40.429" gradientUnits="userSpaceOnUse">
  <stop stop-color="#C0C0C0"/>
  <stop offset="0.25" stop-color="#D5D5D5"/>
  <stop offset="0.5" stop-color="#C0C0C0"/>
  <stop offset="0.75" stop-color="#D5D4D4"/>
  <stop offset="1" stop-color="#C0C0C0"/>
  </linearGradient>
  </defs>
  </TitreDevis>
            <ThreeScene></ThreeScene>
            <Formulaire>
                <Input1 ref={inputNomRef} type="text"/>
                <Input2 ref={inputMailRef} type="text"/>
                <ZoneTexte ref={inputDescriptionRef}></ZoneTexte>
                <GlisserFichier 
                onDragOver={
                    (e)=>{
                        e.preventDefault(); 
                        console.log('fichier detecter')
                    }
                }
                onDragLeave={
                    (e)=>{
                        console.log('fichier non detecter')
                    }
                }
                onDrop={
                    (e)=>{
                        e.preventDefault();
                        console.log(e.dataTransfer.files);
                        dispatch({type: 'SET_IS_FICHIER', payload: e.dataTransfer.files[0].name})
                    }
                }
                onClick={
                    ()=>{
                        inputFichierRef.current.click()
                    }
                }
                >
                    <p>{isFichier}</p>
                    <input 
                    type="file"
                    ref={inputFichierRef}
                    style={{display: 'none'}}
                    onChange={
                        (e)=>{
                            // console.log(e.target.files)
                            dispatch({type: 'SET_IS_FICHIER', payload: e.target.files[0].name})
                        }
                    }/>
                </GlisserFichier>
                    <SousDivBouton>
                        <p>Rechercher</p>
                    </SousDivBouton>
                    <AnimationBoutonNouveau></AnimationBoutonNouveau>
                    <BoutonNouveau 
                    onClick={
                        (e)=>{
                            e.preventDefault();
                            envoiDonnees('http://localhost:3000')
                        }
                    }></BoutonNouveau>
                {/* </div> */}
            </Formulaire>
            <DivReponse ref={divReponseRef}>
                <p ref={texteBonneReponseRef} style={{display: 'none'}}>Devis envoyé avec succès</p>
                <p ref={texteMauvaiseReponseRef} style={{display: 'none'}}>Echec de l'envoi du devis</p>
                <FontAwesomeIcon style={{display: 'none', fontSize: '4em'}} ref={iconBonneReponseRef} icon={faThumbsUp} />
                <FontAwesomeIcon style={{display: 'none', fontSize: '4em'}} ref={iconMauvaiseReponseRef} icon={faThumbsDown} />
            </DivReponse>
        </DivPrincipal>
    )
}

export default Devis