import { settingsActionTypes } from "../../types/settings"

export const showControllerActionCreator = (payload: boolean) => {
    return {type: settingsActionTypes.SHOW_CONTROLLER, payload: payload}
}