import React, { useEffect, useRef } from "react"
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import { ContenantLiensNavigations, DivNavPhone, GlobalStyle, LienNavigation, Nav, SousDivNavPhone } from "../style/navigation";
import mousePointer from "../components/hand-removebg-preview_20px.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from "react-redux";

function Navigation(){
  const dispatch = useDispatch();
  const positionNavigationPhone = useSelector((state)=>state.positionNavigationPhone);
  const navigationRef = useRef(null);
  const contenantLiensNavigationsRef = useRef(null);
  const linkAccueilRef = useRef(null);
  const linkCompetencesRef = useRef(null);
  const linkRealisationsRef = useRef(null);
  const linkDevisRef = useRef(null);
  const location = useLocation();

  function verificationLink(linkRef){
    if(window.location.pathname === linkRef.current.pathname){
      linkRef.current.parentNode.style.border = "solid 0.2em #FFD700";
      linkRef.current.style.color = "#FFD700";
    }else{
      linkRef.current.parentNode.style.border = "solid 0.2em transparent";
      linkRef.current.style.color = "#ffffff70";
    }
  }

  function deplacementContenantLiensNavigations(contenantRef, navigationRef){
    if(window.innerWidth <= 700){
      // if(positionNavigationPhone === 'haut' && contenantRef.current.style.top === "-18vh"){
      if(navigationRef.current.offsetHeight >= window.innerHeight*0.048 && navigationRef.current.offsetHeight <= window.innerHeight*0.052){
        console.log('top '+contenantRef.current.offsetTop)
        console.log('heightNavigation '+navigationRef.current.offsetHeight)
        console.log('windowHeight '+window.innerHeight*0.05)
        contenantRef.current.style.animation = "deplacementNavigationHaut 2s linear";
        contenantRef.current.style.top = "0vh";
        dispatch({type: 'SET_POSITION_NAVIGATION_PHONE', payload: 'bas'})
        navigationRef.current.style.animation = "grandirNavigation 2s linear";
        navigationRef.current.style.height = "23vh";
      }
      // if(positionNavigationPhone === 'bas' && contenantRef.current.style.top === "0vh"){
      if(navigationRef.current.offsetHeight >= window.innerHeight*0.228 && navigationRef.current.offsetHeight <= window.innerHeight*0.232){
        console.log('top '+contenantRef.current.offsetTop)
        console.log('heightNavigation '+navigationRef.current.offsetHeight)
        console.log('windowHeight '+Math.round(window.innerHeight*0.23))
        contenantRef.current.style.animation = "deplacementNavigationBas 2s linear";
        contenantRef.current.style.top = "-18vh";
        dispatch({type: 'SET_POSITION_NAVIGATION_PHONE', payload: 'haut'})
        navigationRef.current.style.animation = "retrecirNavigation 2s linear";
        navigationRef.current.style.height = "5vh";
      }
    }
  }

  useEffect(() => {
    verificationLink(linkAccueilRef);
    verificationLink(linkCompetencesRef);
    verificationLink(linkRealisationsRef);
    verificationLink(linkDevisRef);
    if(window.innerWidth <= 700){
      contenantLiensNavigationsRef.current.style.top = "-18vh";
      contenantLiensNavigationsRef.current.style.animation = "";
      dispatch({type: 'SET_POSITION_NAVIGATION_PHONE', payload: 'haut'});
      navigationRef.current.style.height = "5vh";
      navigationRef.current.style.animation = "";
    }else{
      contenantLiensNavigationsRef.current.style.top = "";
      contenantLiensNavigationsRef.current.style.animation = "";
      dispatch({type: 'SET_POSITION_NAVIGATION_PHONE', payload: 'haut'});
      navigationRef.current.style.height = "";
      navigationRef.current.style.animation = "";
    }
  }, [location]);

  window.addEventListener('resize', ()=>{
    if(navigationRef.current && contenantLiensNavigationsRef.current){
      if(window.innerWidth <= 700){
        contenantLiensNavigationsRef.current.style.top = "-18vh";
        contenantLiensNavigationsRef.current.style.animation = "";
        navigationRef.current.style.height = "5vh";
        navigationRef.current.style.animation = "";
      }else{
        contenantLiensNavigationsRef.current.style.top = "";
        contenantLiensNavigationsRef.current.style.animation = "";
        navigationRef.current.style.height = "";
        navigationRef.current.style.animation = "";
      }
    }
  })
  const styleLink = {
    textDecoration: "none",
    color: "#ffffff70",
    fontWeight: "bold",
    cursor: `url(${mousePointer}), pointer`,
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0em 0.3em"
  }
    return(
        <Nav ref={navigationRef}>
          <GlobalStyle/>
          <DivNavPhone>
            <FontAwesomeIcon 
            onClick={()=>{
              deplacementContenantLiensNavigations(contenantLiensNavigationsRef, navigationRef)
            }}
            style={{
                  height: "100%",
                  width: "20%",
                  cursor: `url(${mousePointer}), pointer`,
                  color: "grey"
            }} icon={faBars} />
            <SousDivNavPhone></SousDivNavPhone>
          </DivNavPhone>
          <ContenantLiensNavigations ref={contenantLiensNavigationsRef}>
            <LienNavigation>
              <Link ref={linkAccueilRef} to="/Accueil" style={styleLink}>Accueil</Link>
            </LienNavigation>
            <LienNavigation>
              <Link ref={linkCompetencesRef} to="/Competences" style={styleLink}>Competences</Link>
            </LienNavigation>
            <LienNavigation>
              <Link ref={linkRealisationsRef} to="/Realisations" style={styleLink}>Realisations</Link>
            </LienNavigation>
            <LienNavigation>
              <Link ref={linkDevisRef} to="/Devis" style={styleLink}>Devis</Link>
            </LienNavigation>
          </ContenantLiensNavigations>
        </Nav>
    )
}

export default Navigation