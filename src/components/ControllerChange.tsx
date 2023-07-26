import { useTypesSelector } from '../hooks/useTypesSelector'
import { useActions } from '../hooks/useActions'
import {useEffect} from 'react'



export const ControllerChange: React.FC = () => {
    const {showController} = useTypesSelector(state => state.settings)
    const {showControllerActionCreator} = useActions()
    const changeShowController = () => {
        if (showController) {
            showControllerActionCreator(false)
        } else {
            showControllerActionCreator(true)
        }
    }
    return (
        <div className="show-controllerBox settings__elem">
            <input onChange={() => changeShowController()} type="checkbox" name="showController" id='showController' checked={showController}/>
            <label htmlFor="showController" className='show-controller'>КОТРОЛЛЕР</label>
        </div>
    )
}