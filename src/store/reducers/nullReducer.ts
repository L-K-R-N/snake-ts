import { NullsAction, NullsState, nullsActionTypes } from "../../types/nulls"

const initialState = {
    delay: null,
}

export const nullsReducer = (state = initialState, action: NullsAction): NullsState => {
    switch (action.type) {

        case nullsActionTypes.CHANGE_DELAY:
            return {...state, delay: action.payload}
        default: 
            return state
    }
}