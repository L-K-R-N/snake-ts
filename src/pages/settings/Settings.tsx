import { useEffect, useRef } from 'react'
import { useActions } from '../../hooks/useActions'
import { useTypesSelector } from '../../hooks/useTypesSelector'

import './Settings.css'
import { ShowControllerItem } from '../../components/ShowControllerItem'
export const Settings: React.FC = () => {
    const {pause} = useTypesSelector(state => state.pause)
    const {delay} = useTypesSelector(state => state.pause)
    const {pauseOpenedActionCreator, changeDelayActionCreator} = useActions()
    const settingsRef = useRef<HTMLDivElement | null>(null)


    useEffect(() => {
        if (!settingsRef.current) return;
        settingsRef.current.className = pause ? 'settings' : 'settings settings-hide'
    }, [pause])
    const closeSettings = () => {
        pauseOpenedActionCreator(false)
        changeDelayActionCreator(100)
    }
    return (
        <div ref={settingsRef} className="settings">
            <header className="settings__header">
                <div className="wrapper">
                    <section className="settings__header-content">
                        <div onClick={() => closeSettings()} className="settings-close">

                        </div>
                        <h2 className="settings__header-title">SETTINGS</h2>
                    </section>
                </div>
            </header>
            <main className="settings__main">
                <div className="wrapper">
                    <div className="settings__main-content">
                        <div className="settings__options">
                            <ShowControllerItem/>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}