import * as GameActionCreators  from './game';
import * as SettingsActionCreators from './settings'
import * as NullsActionCreators from './nulls'

export default {
    ...GameActionCreators,
    ...SettingsActionCreators,
    ...NullsActionCreators,
}