import {Link} from 'react-router-dom'

interface Props {
    objects: IObject[];
    navClass?: string;
    ulClass?: string
}

interface IObject {
    value: string;
    text: string;
    onClick?: () => void;
    liClass?: string;
    aClass?: string;
}

export const Navbar: React.FC<Props> = ({objects, navClass, ulClass}) => {

    
    return ( 
        <nav className={navClass}>
            <ul className={ulClass}>
                {objects.map(object => 
                    <li key={object.value} className={object.liClass} >
                        <Link className={object.aClass} to={object.value} onClick={() => object.onClick ? object.onClick() : '' }>{object.text}</Link>
                    </li>
                )}
            </ul>
        </nav>
    )
}