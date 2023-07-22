import { ControllerAction, ControllerState, controllerActionTypes } from "../../types/controller"

const initialState = {
    show: false,
}

export const controllerReducer = (state = initialState, action: ControllerAction): ControllerState => {
    switch(action.type) {
        case controllerActionTypes.CONTROLLER_SHOW: 
            return {show: true}
        case controllerActionTypes.CONTROLLER_HIDE: 
            return {show: false}
        default:
            return state;
    }
}