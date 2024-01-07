import React, {useRef, useEffect} from "react"
import { Paragraphe, GlobalStyle, TextPrincipal, TraitUnion, DivTexte } from "../style/texte";
import { useDispatch, useSelector } from "react-redux";

function Texte(){
    const divTexteRef = useRef(null);
    const paragrapheRef = useRef(null);
    const cursorRef = useRef(null);
    const dispatch = useDispatch();
    const texteHeight = useSelector((state)=>state.texteHeight);


    window.addEventListener('resize', ()=>{
        if(paragrapheRef.current){
            console.log(paragrapheRef.current.offsetHeight)
            dispatch({type: 'SET_TEXTE_HEIGHT', payload: paragrapheRef.current.offsetHeight});
        }
    });

    useEffect(()=>{
        if(paragrapheRef.current){
            setTimeout(()=>{
                console.log(paragrapheRef.current.offsetHeight);
                dispatch({type: 'SET_TEXTE_HEIGHT', payload: paragrapheRef.current.offsetHeight});
            }, 400)
            // console.log(paragrapheRef.current.offsetHeight)
            let texte = paragrapheRef.current.textContent;

            const observer = new IntersectionObserver((entries) => {
                for(const entry of entries){
                    if(entry.isIntersecting){
                        for (let i = 0; i <= texte.length; i++) {
                            // if(window.location.pathname === '/'){
                                setTimeout(function () {
                                    if(i === texte.length){
                                        console.log(typeof paragrapheRef.current.textContent)
                                        paragrapheRef.current.textContent = texte;
                                        cursorRef.current.style.animation = 'cursor .4s step-end infinite alternate';
                                    }else{
                                        console.log(typeof paragrapheRef.current.textContent)
                                        paragrapheRef.current.textContent = texte.slice(0, -(texte.length-i));
                                    }
                                }, i * 20); 
                            // }
                        };
                        observer.unobserve(entry.target)
                    }
                }
            })
            
            observer.observe(divTexteRef.current)
        }
    },[])
    

    return(
        <DivTexte ref={divTexteRef} >
            <GlobalStyle/>
            <Paragraphe style={{    position: "absolute",
    /* top: 100vh; */
    visibility: "hidden"}}><TextPrincipal>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci, maiores repellendus itaque delectus odit iure natus. Minus ipsa possimus id placeat laboriosam autem cupiditate officiis! Quos sint expedita, veritatis vel, obcaecati animi dolorum eius cumque consequatur reiciendis aliquam iure vero earum voluptatibus sapiente tempore nobis. Quos, neque, harum maiores rerum in repudiandae soluta architecto similique labore vitae numquam nulla, perspiciatis corrupti aut totam sequi molestias dolorem. Consequuntur fugit ea saepe exercitationem optio hic a esse dolorum enim est quidem obcaecati maiores facilis cumque velit debitis, corporis voluptatibus, iste, quasi eos? Fugiat asperiores adipisci ad enim nemo sed quaerat magni voluptates</TextPrincipal><TraitUnion >|</TraitUnion></Paragraphe>
            <Paragraphe><TextPrincipal ref={paragrapheRef}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci, maiores repellendus itaque delectus odit iure natus. Minus ipsa possimus id placeat laboriosam autem cupiditate officiis! Quos sint expedita, veritatis vel, obcaecati animi dolorum eius cumque consequatur reiciendis aliquam iure vero earum voluptatibus sapiente tempore nobis. Quos, neque, harum maiores rerum in repudiandae soluta architecto similique labore vitae numquam nulla, perspiciatis corrupti aut totam sequi molestias dolorem. Consequuntur fugit ea saepe exercitationem optio hic a esse dolorum enim est quidem obcaecati maiores facilis cumque velit debitis, corporis voluptatibus, iste, quasi eos? Fugiat asperiores adipisci ad enim nemo sed quaerat magni voluptates</TextPrincipal><TraitUnion ref={cursorRef}>|</TraitUnion></Paragraphe>
        </DivTexte>
    )
}

export default Texte