export enum pauseActionTypes {

    PAUSE = 'PAUSE'
}



interface PauseOpenedAction {
    type: pauseActionTypes.PAUSE;
    payload: boolean;
}

export type PauseAction = PauseOpenedAction;

export interface PauseState {
    delay: number | null;
    pause: boolean;
}
