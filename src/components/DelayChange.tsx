import { useTypesSelector } from '../hooks/useTypesSelector'
import { useActions } from '../hooks/useActions'
import {useEffect} from 'react'



export const DelayChange: React.FC = () => {
    const {showController} = useTypesSelector(state => state.settings)
    const {showControllerActionCreator} = useActions()
    const delayChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        if (!e.target.value) return;
        const target = e.target;
        localStorage.setItem('delay', target.value)

    }
    return (
        <div className="show-controllerBox settings__elem">
            <label htmlFor="change-delay-container" className='show-controller'>СЛОЖНОСТЬ</label>
            <select onChange={(e) => delayChange(e)} className='change-delay-container' id="change-delay-container">
                <option  value="35">НЕВОЗМОЖНО</option>
                <option value="50">СЛОЖНО</option>
                <option value="100">НОРМАЛЬНО</option>
                <option value="150">ЛЕГКО</option>
                <option value="200">ПРОЩЕ ПРОСТОГО</option>
            </select>
        </div>
    )
}