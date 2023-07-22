import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import ActionCreator from '../store/action-creators/index'


export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(ActionCreator, dispatch)
} 