import { useState } from 'react'
import { useTypesSelector } from '../hooks/useTypesSelector'
import { useActions } from '../hooks/useAction'
import { ControllerState } from '../types/controller';


export const ShowControllerItem: React.FC = () => {
    const {show} = useTypesSelector(state => state.controller)
    const {controllerShowActionCreator, controllerHideActionCreator} = useActions()
    const changeShowController = () => {
        if (show) {
            controllerHideActionCreator()
        } else {
            controllerShowActionCreator()
        }
        console.log(show)
    }
    return (
        <div className="showControllerBox settings__elem">
            <input onChange={() => changeShowController()} type="checkbox" name="showController" id='showController' checked={show}/>
            <label htmlFor="showController">Контроллер</label>
        </div>
    )
}