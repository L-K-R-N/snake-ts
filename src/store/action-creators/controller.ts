import { Dispatch } from "react";
import { ControllerAction, controllerActionTypes } from "../../types/controller"

export const controllerShowActionCreator = () => {
    return {type: controllerActionTypes.CONTROLLER_SHOW}
}
export const controllerHideActionCreator = () => {
    return {type: controllerActionTypes.CONTROLLER_HIDE};

}