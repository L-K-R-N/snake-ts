import { useEffect, useRef } from "react"
import { Navbar } from "../UI/Navbar/Navbar"
import './Pause.css'
import { useTypesSelector } from "../../hooks/useTypesSelector"
import { useActions } from "../../hooks/useActions"
export const Pause: React.FC = () => {
    const {pause} = useTypesSelector(state => state.game)
    const {pauseOpenedActionCreator, changeDelayActionCreator} = useActions()
    const pauseRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        if (!pauseRef.current) {console.log(1); return};
        pauseRef.current.className = pause ? 'pause' : 'pause pause-hide'
    }, [pause])

    const resume = () => {
        pauseOpenedActionCreator(false)
        changeDelayActionCreator(100)
    }
    return (
        <div className="pause" ref={pauseRef}>
             <header className="pause__header">
                <div className="wrapper">
                    <section className="pause__header-content">
                        <div onClick={() => resume()} className="pause-close">

                        </div>
                        <h2 className="pause__header-title">ПАУЗА</h2>
                    </section>
                </div>
            </header>
            <main className="pause__main">
                <div className="wrapper pause__main-container">
                    <div className="pause__main-content">
                    <Navbar objects={[
                            {value: '/',
                            text: 'Гл. Меню'},
                            {value: '/settings',
                            text: 'Настройки'}
                            ]}
                    />
                    </div>
                </div>
            </main>
        </div>
    )
}