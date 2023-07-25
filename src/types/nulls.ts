export enum nullsActionTypes {
    CHANGE_DELAY = 'CHANGE_DELAY'
}



interface ChangeDelayAction {
    type: nullsActionTypes.CHANGE_DELAY;
    payload: number | null;
}

export type NullsAction = ChangeDelayAction;

export interface NullsState {
    delay: number | null;

}
