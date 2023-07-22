
export enum controllerActionTypes {
    CONTROLLER_SHOW = 'CONTROLLER_SHOW',
    CONTROLLER_HIDE = 'CONTROLLER_HIDE',

}

interface ControllerActionShow {
    type: controllerActionTypes.CONTROLLER_SHOW;
}
interface ControllerActionHide {
    type: controllerActionTypes.CONTROLLER_HIDE;
}

export type ControllerAction = ControllerActionShow | ControllerActionHide;

export interface ControllerState {
    show: boolean;
}