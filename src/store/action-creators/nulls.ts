import { nullsActionTypes } from "../../types/nulls"

export const changeDelayActionCreator = (payload: number | null) => {
    return {type: nullsActionTypes.CHANGE_DELAY, payload: payload}
}