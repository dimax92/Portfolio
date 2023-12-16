import styled, { keyframes } from "styled-components"
import { useSelector } from "react-redux";
import mouse from "../components/arrow-removebg-preview_20px.png"

const PositionXMouse = () => { return useSelector((state) => state.positionXMouse) };
const PositionYMouse = () => { return useSelector((state) => state.positionYMouse) };
const PisibilityElementMouse = () => { return useSelector((state) => state.visibilityElementMouse) };

export const DivPrincipal = styled.div`
height: 100vh; 
cursor: url(${mouse}), auto`

export const ElementFollowMouse = styled.div`
height: 40px; 
width: 40px; 
border: solid 1px black; 
border-radius: 50px; 
position: relative; 
left: ${PositionXMouse}px; 
top: ${PositionYMouse}px; 
visibility: ${PisibilityElementMouse}`