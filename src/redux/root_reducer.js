import {combineReducers} from "redux"

import rgbReducer from "./rgb/rgb.reducers"


const rootReducer = combineReducers({
    rgb: rgbReducer
})

export default rootReducer