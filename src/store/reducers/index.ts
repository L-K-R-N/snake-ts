import { combineReducers } from "redux";
import { gameReducer } from "./gameReducer";
import { pauseReducer } from "./pauseReducer";
import { settingsReducer } from "./settingsReducer";
export const rootReducer = combineReducers({
    game: gameReducer,
    pause: pauseReducer,
    settings: settingsReducer,
})

export type RootState = ReturnType<typeof rootReducer>