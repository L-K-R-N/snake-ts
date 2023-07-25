import { Navbar } from "../UI/Navbar/Navbar"
import './Pause.css'
export const Pause: React.FC = () => {

    const resume = () => {

    }
    return (
        <div className="pause">
             <header className="pause__header">
                <div className="wrapper">
                    <section className="settings__header-content">
                        <div onClick={() => resume()} className="pause-close">

                        </div>
                        <h2 className="pause__header-title">ПАУЗА</h2>
                    </section>
                </div>
            </header>
            <main className="pause__main">
                <div className="wrapper">
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