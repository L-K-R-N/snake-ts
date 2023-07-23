import { useTypesSelector } from '../hooks/useTypesSelector'
import { useActions } from '../hooks/useActions'
import {useEffect} from 'react'



export const ShowControllerItem: React.FC = () => {
    const {isPlaying, showController} = useTypesSelector(state => state.game)
    const {showControllerActionCreator, isPlayingActionCreator} = useActions()
    const changeShowController = () => {
        if (showController) {
            showControllerActionCreator(false)
        } else {
            showControllerActionCreator(true)
        }
        console.log(showController)
    }

    useEffect(() => {
        
    })
    return (
        <div className="showControllerBox settings__elem">
            <input onChange={() => changeShowController()} type="checkbox" name="showController" id='showController' checked={showController}/>
            <label htmlFor="showController">Контроллер</label>
        </div>
    )
}