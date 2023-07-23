export enum gameActionTypes {
    GAMEOVER = 'GAMEOVER',
    IS_PLAYING = 'IS_PLAYING',
    SHOW_CONTROLLER = 'SHOW_CONTROLLER',
    CHANGE_DIRECTION = 'CHANGE_DIRECTION'
}

interface GameOverAction {
    type: gameActionTypes.GAMEOVER;
    payload: boolean;
}

interface IsPlayingAction {
    type: gameActionTypes.IS_PLAYING;
    payload: boolean;
}

interface ShowControllerAction {
    type: gameActionTypes.SHOW_CONTROLLER;
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

export type GameAction = GameOverAction | IsPlayingAction | ShowControllerAction | DirectionAction;

export interface GameState {
    gameOver: boolean;
    isPlaying: boolean;
    showController: boolean;
    direction: number[];
}