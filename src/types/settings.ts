export enum settingsActionTypes {
    SHOW_CONTROLLER = 'SHOW_CONTOLLER'
}

interface ShowControllerAction {
    type: settingsActionTypes.SHOW_CONTROLLER;
    payload: boolean;
}

export type SettingsAction = ShowControllerAction;

export interface SettingsState {
    showController: boolean
}
