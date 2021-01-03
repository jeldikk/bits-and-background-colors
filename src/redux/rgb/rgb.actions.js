import RgbActionTypes from "./rgb.types"

export const setRedValue = (value) => {
    return {
        type: RgbActionTypes.SET_RED,
        payload: value
    }
}

export const setGreenValue = (value) => {
    return {
        type: RgbActionTypes.SET_GREEN,
        payload: value
    }
}

export const setBlueValue = (value) => {
    return {
        type: RgbActionTypes.SET_BLUE,
        payload: value
    }
}