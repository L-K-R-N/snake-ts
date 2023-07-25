export enum gameActionTypes {
    GAMEOVER = 'GAMEOVER',
    IS_PLAYING = 'IS_PLAYING',
    CHANGE_DIRECTION = 'CHANGE_DIRECTION',
    PAUSE = 'PAUSE'
}

interface GameOverAction {
    type: gameActionTypes.GAMEOVER;
    payload: boolean;
}

interface IsPlayingAction {
    type: gameActionTypes.IS_PLAYING;
    payload: boolean;
}



interface DirectionAction {
    type: gameActionTypes.CHANGE_DIRECTION;
    payload: number[];
}


export const directions = {
    left: [-1, 0],
    up: [0, -1],
    right: [1, 0],
    down: [0, 1]
}

interface PauseOpenedAction {
    type: gameActionTypes.PAUSE;
    payload: boolean;
}




export type GameAction = GameOverAction | IsPlayingAction | DirectionAction | PauseOpenedAction;

export interface GameState {
    gameOver: boolean;
    isPlaying: boolean;
    direction: number[];
    pause: boolean;
}