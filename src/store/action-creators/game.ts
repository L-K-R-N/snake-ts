import { gameActionTypes } from "../../types/game"


export const gameOverActionCreator = (payload: boolean) => {
    return {type: gameActionTypes.GAMEOVER, payload: payload}
}


export const isPlayingActionCreator = (payload: boolean) => {
    return {type: gameActionTypes.IS_PLAYING, payload: payload}
}


export const showControllerActionCreator = (payload: boolean) => {
    return {type: gameActionTypes.SHOW_CONTROLLER, payload: payload}
}


export const changeDirectionActionCreator = (payload: number[]) => {
    return {type: gameActionTypes.CHANGE_DIRECTION, payload: payload}
}