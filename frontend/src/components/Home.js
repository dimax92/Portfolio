import { useSelector, useDispatch } from "react-redux"
import mouse from "./hand-removebg-preview_20px.png"
import { DivPrincipal, ElementFollowMouse } from "../style/style";

const Home = () => {
    const dispatch = useDispatch();
    const positionXMouse = useSelector((state) => state.positionXMouse);
    const positionYMouse = useSelector((state) => state.positionYMouse);
    const visibilityElementMouse = useSelector((state) => state.visibilityElementMouse);
    return (
        <DivPrincipal onMouseMove={
            (e)=>{
                console.log(e.target.scrollWidth)
                let positionX = e.clientX-20;
                let positionY = e.clientY-20;
                if(positionX >= 0 && positionX <= e.target.scrollWidth-40){
                    dispatch({type: 'SET_POSITION_X_MOUSE', payload: positionX})
                }
                if(positionY >= 0 && positionY <= e.target.scrollHeight-40){
                    dispatch({type: 'SET_POSITION_Y_MOUSE', payload: positionY})
                }
            }} onMouseLeave={
                () => {
                    dispatch({type: 'SET_VISIBILITY_ELEMENT_MOUSE', payload: "hidden"})
                }
            } onMouseEnter={
                () => {
                    dispatch({type: 'SET_VISIBILITY_ELEMENT_MOUSE', payload: "initial"})
                }
            }>
            <ElementFollowMouse />
            <p>{`${positionXMouse}x ${positionYMouse}y`}</p>
        </DivPrincipal>
    )
}

export default Home