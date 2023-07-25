import { GameAction, GameState, gameActionTypes, directions } from "../../types/game";

const initialState = {
    gameOver: false,
    isPlaying: false,
    delay: 999999999,
    direction: directions.right,

}

export const gameReducer = (state = initialState, action: GameAction): GameState => {
    switch (action.type) {
        case gameActionTypes.GAMEOVER: 
            return {...state, gameOver: action.payload}
        case gameActionTypes.IS_PLAYING: 
            return {...state, isPlaying: action.payload}
        case gameActionTypes.CHANGE_DELAY:
            return {...state, delay: action.payload}
        case gameActionTypes.CHANGE_DIRECTION: 
            return {...state, direction: action.payload}
  
        default: 
            return state;
    }
} 