import { legacy_createStore as createStore } from "redux";

const initialState = {
    positionXMouse: 0,
    positionYMouse: 0,
    visibilityElementMouse: "hidden"
}

function reducer(state = initialState, action){
    switch(action.type){
        case 'SET_POSITION_X_MOUSE':
            return{
                ...state,
                positionXMouse: action.payload
            };
        case 'SET_POSITION_Y_MOUSE':
            return{
                ...state,
                positionYMouse: action.payload
            };
        case 'SET_VISIBILITY_ELEMENT_MOUSE':
            return{
                ...state,
                visibilityElementMouse: action.payload
            }
        default:
            return state;
    }
}

const store = createStore(reducer)

export default store