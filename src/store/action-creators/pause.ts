import { pauseActionTypes } from "../../types/pause"

export const pauseOpenedActionCreator = (payload: boolean) => {
    return {type: pauseActionTypes.PAUSE, payload: payload}
}