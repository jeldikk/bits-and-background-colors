import RgbActionTypes from "./rgb.types"

const INITIAL_DATA = {
    red: 234,
    green: 200,
    blue: 198
}

const rgbReducer = (state=INITIAL_DATA, action)=>{
    switch(action.type){
        case RgbActionTypes.SET_RED:
            return {
                ...state,
                red: action.payload
            }
        case RgbActionTypes.SET_GREEN:
            return {
                ...state,
                green: action.payload
            }
        case RgbActionTypes.SET_BLUE:
            return {
                ...state,
                blue: action.payload
            }
        default:
            return state
    }
}

export default rgbReducer;