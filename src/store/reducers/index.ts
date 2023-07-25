import { combineReducers } from "redux";
import { gameReducer } from "./gameReducer";
import { settingsReducer } from "./settingsReducer";
import { nullsReducer } from "./nullReducer";
export const rootReducer = combineReducers({
    game: gameReducer,
    settings: settingsReducer,
    nulls: nullsReducer,
})

export type RootState = ReturnType<typeof rootReducer>