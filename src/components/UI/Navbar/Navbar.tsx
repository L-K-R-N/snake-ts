import {Link} from 'react-router-dom'

interface Props {
    objects: IObject[];
}

interface IObject {
    value: string;
    text: string;
}

export const Navbar: React.FC<Props> = ({objects}) => {

    
    return ( 
        <nav className="menu__nav">
            <ul className="menu__list">
                {objects.map(object => 
                    <li className='menu__list-item'>
                        <Link to={object.value}>{object.text}</Link>
                    </li>
                )}
            </ul>
        </nav>
    )
}