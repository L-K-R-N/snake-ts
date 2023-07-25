import { PauseAction, PauseState, pauseActionTypes } from "../../types/pause"

const initialState = {
    delay: null,
    pause: false,
}

export const pauseReducer = (state = initialState, action: PauseAction): PauseState => {
    switch (action.type) {

        case pauseActionTypes.PAUSE:
            return {...state, pause: action.payload}
        default: 
            return state
    }
}