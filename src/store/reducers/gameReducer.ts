import { GameAction, GameState, gameActionTypes, directions } from "../../types/game";

const initialState = {
    gameOver: false,
    isPlaying: false,
    showController: false,
    direction: directions.right,
    settings: false,
}

export const gameReducer = (state = initialState, action: GameAction): GameState => {
    switch (action.type) {
        case gameActionTypes.GAMEOVER: 
            return {...state, gameOver: action.payload}
        case gameActionTypes.IS_PLAYING: 
            return {...state, isPlaying: action.payload}
        case gameActionTypes.SHOW_CONTROLLER: 
            return {...state, showController: action.payload}
        case gameActionTypes.CHANGE_DIRECTION: 
            return {...state, direction: action.payload}
        case gameActionTypes.SETTINGS_OPEN: 
            return {...state, settings: action.payload}
        default: 
            return state;
    }
} 