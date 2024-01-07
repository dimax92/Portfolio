import React from "react"
import { DivContact, DivContactParagraphe, ParagrapheContactTexte, ParagrapheContactTitre } from "../style/contact"
import { DivPrincipal } from "../style/titre"
import ThreeScene from "../components/ThreeScene"

function Contact(){
    return(
        <DivPrincipal>
            <ThreeScene></ThreeScene>
            <DivContact>
                <DivContactParagraphe>
                    <ParagrapheContactTitre>Numéro de téléphone</ParagrapheContactTitre>
                    <ParagrapheContactTexte>06 11 09 48 49</ParagrapheContactTexte>
                </DivContactParagraphe>
                <DivContactParagraphe>
                    <ParagrapheContactTitre>Email</ParagrapheContactTitre>
                    <ParagrapheContactTexte>webdimax1@gmail.com</ParagrapheContactTexte>
                </DivContactParagraphe>
            </DivContact>
        </DivPrincipal>
    )
}

export default Contact