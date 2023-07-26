import { useEffect, useRef } from "react"
import { Navbar } from "../UI/Navbar/Navbar"
import './Pause.css'
import { useTypesSelector } from "../../hooks/useTypesSelector"
import { useActions } from "../../hooks/useActions"

interface Props {
    button: HTMLButtonElement | null
}
export const Pause: React.FC<Props> = ({button}) => {
    const {pause, isPlaying} = useTypesSelector(state => state.game)
    const {pauseOpenedActionCreator, changeDelayActionCreator} = useActions()
    const pauseRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        if (!pauseRef.current) {console.log(1); return};
        pauseRef.current.className = pause ? 'pause' : 'pause pause-hide'
    }, [pause])

    const resume = () => {
        pauseOpenedActionCreator(false);
        if (button) {
            button.focus()
        }
        if (isPlaying) {
            changeDelayActionCreator(100)
        }
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
                <div className="wrapper pause__main-content">
                    <div className="pause__main-container ">
                    <Navbar navClass='pause__nav'
                            ulClass='pause__list'
                            objects={[
                            {value: '/',
                            text: 'Гл. Меню',
                            liClass: 'pause__list-item',
                            aClass: 'pause__list-link',
                            },
                            {value: '/settings',
                            text: 'Настройки',
                            liClass: 'pause__list-item',
                            aClass: 'pause__list-link',}
                            ]}
                    />
                    </div>
                </div>
            </main>
        </div>
    )
}