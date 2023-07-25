import {Link} from 'react-router-dom'
import { Navbar } from '../../components/UI/Navbar/Navbar'
import './Menu.css'
export const Menu: React.FC = () => {

    return (
        <div className="menu">
            <header className="menu__header">
                <div className="wrapper">
                    <h2 className="menu__header-content">
                        <img src="" alt="" className="logo" />
                        <h2 className='menu__header-title'>Меню</h2>
                    </h2>
                </div>
            </header>
            <main className="menu__main">
                <div className="wrapper menu__main-conteiner">
                    <section className="menu__main-content">
                        <h2 className='menu__main-title'>Змейка</h2>
                        <Navbar objects={[
                            {value: 'game',
                            text: 'Играть'},
                            {value: 'settings',
                            text: 'Настройки'}
                            ]}/>
                    </section>
                </div>
            </main>
        </div>
    )
}