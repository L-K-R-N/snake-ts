import { combineReducers } from "redux";
import { controllerReducer } from "./controllerReducer";
export const rootReducer = combineReducers({
    controller: controllerReducer,
})

export type RootState = ReturnType<typeof rootReducer>