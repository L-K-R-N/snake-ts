import {Link} from 'react-router-dom'
import { Navbar } from '../../components/UI/Navbar/Navbar'
import './Menu.css'
import { useTypesSelector } from '../../hooks/useTypesSelector'
import { useActions } from '../../hooks/useActions'
export const Menu: React.FC = () => {
    const {pause} = useTypesSelector(state => state.game)
    const {pauseOpenedActionCreator} = useActions()

    return (
        <div className="menu">
            <header className="menu__header">
                <div className="wrapper">
                    <h2 className="menu__header-content">
                        <img src="" alt="" className="logo" />
                        <h2 className='menu__header-title'>МЕНЮ</h2>
                    </h2>
                </div>
            </header>
            <main className="menu__main">
                <div className="wrapper menu__main-container">
                    <section className="menu__main-content">
                        <h1 className='menu__main-title'>ЗМЕЙКА</h1>
                        <Navbar
                            navClass='menu__nav'
                            ulClass='menu__list'
                            objects={[
                                {value: 'game',
                                text: 'Играть',
                                liClass: 'menu__list-item',
                                aClass: 'menu__list-link',
                                onClick() {
                                    pauseOpenedActionCreator(false)
                                }},

                                {value: 'settings',
                                text: 'Настройки',
                                liClass: 'menu__list-item',
                                aClass: 'menu__list-link'},
                            
                            ]}
                            />
                    </section>
                </div>
            </main>
        </div>
    )
}