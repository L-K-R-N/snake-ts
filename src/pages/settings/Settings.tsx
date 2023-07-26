import { useEffect, useRef } from 'react'
import { useActions } from '../../hooks/useActions'
import { useTypesSelector } from '../../hooks/useTypesSelector'

import './Settings.css'
import { ControllerChange } from '../../components/ControllerChange'
import { useNavigate } from 'react-router'
import { DelayChange } from '../../components/DelayChange'
export const Settings: React.FC = () => {
    const {pauseOpenedActionCreator, changeDelayActionCreator} = useActions()

    const navigate = useNavigate()

    return (
        <div className="settings">
            <header className="settings__header">
                <div className="wrapper">
                    <section className="settings__header-content">
                        <div onClick={() => navigate(-1)} className="settings-close">

                        </div>
                        <h2 className="settings__header-title">НАСТРОЙКИ</h2>
                    </section>
                </div>
            </header>
            <main className="settings__main">
                <div className="wrapper settings__main-content">
                    <div className="settings__main-container">
                        <div className='settings__menu'></div>
                        <div className="settings__options">
                                <ControllerChange/>
                                <DelayChange/>
                        </div>
                    </div>
                </div>
                
            </main>
        </div>
    )
}