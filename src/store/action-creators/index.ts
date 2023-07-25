import * as GameActionCreators  from './game';
import * as PauseActionCreators from './pause'
import * as SettingsActionCreators from './settings'

export default {
    ...GameActionCreators,
    ...PauseActionCreators,
    ...SettingsActionCreators,
}