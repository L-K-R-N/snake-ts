import {  SettingsAction, SettingsState, settingsActionTypes } from "../../types/settings"

const initialState = {
    showController: false,
}

export const settingsReducer = (state = initialState, action: SettingsAction): SettingsState => {
    switch (action.type) {
        case settingsActionTypes.SHOW_CONTROLLER:
            return {...state, showController: action.payload}
        default: 
            return state
    }
}