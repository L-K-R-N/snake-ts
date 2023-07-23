import { useEffect, useRef } from 'react'
import { useActions } from '../../hooks/useActions'
import { useTypesSelector } from '../../hooks/useTypesSelector'
import { ShowControllerItem } from '../ShowControllerItem'
import './Settings.css'
export const Settings: React.FC = () => {
    const {settings} = useTypesSelector(state => state.game)
    const {settingsOpenActionCreator} = useActions()
    const settingsRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        if (!settingsRef.current) return;
        settingsRef.current.className = settings ? 'settings' : 'settings settings-hide'
    }, [settings])
    return (
        <div ref={settingsRef} className="settings">
            <div onClick={() => settingsOpenActionCreator(false)} className="settings-close">

            </div>
            <ShowControllerItem/>
        </div>
    )
}