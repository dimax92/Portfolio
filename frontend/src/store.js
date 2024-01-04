import { legacy_createStore as createStore } from "redux";

const initialState = {
    positionXMouse: 0,
    positionYMouse: 0,
    visibilityElementMouse: "hidden",
    canvasHeight: 0,
    canvasWidth: 0,
    divPrincipalHeight: 0,
    isFichier: 'Glisser votre fichier',
    texteHeight: 0,
    positionNavigationPhone: 'haut'
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
            };
        case 'SET_CANVAS_HEIGHT':
            return{
                ...state,
                canvasHeight: action.payload
            };
        case 'SET_CANVAS_WIDTH':
            return{
                ...state,
                canvasWidth: action.payload
            };
        case 'SET_DIV_PRINCIPAL_HEIGHT':
            return{
                ...state,
                divPrincipalHeight: action.payload
            };
        case 'SET_IS_FICHIER':
            return{
                ...state,
                isFichier: action.payload
            };
        case 'SET_TEXTE_HEIGHT':
            return{
                ...state,
                texteHeight: action.payload
            };
        case 'SET_POSITION_NAVIGATION_PHONE':
            return{
                ...state,
                positionNavigationPhone: action.payload
            };
        default:
            return state;
    }
}

const store = createStore(reducer)

export default store