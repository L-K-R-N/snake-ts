import { useTypesSelector } from "../../hooks/useTypesSelector"

interface Props {
    changeDirection: (e: React.KeyboardEvent<HTMLDivElement>) => void;
}

export const ControllerBox: React.FC<Props> = ({changeDirection}) => {
    const {show} = useTypesSelector(state => state.controller)
    
    return (
        <div className="controllerBox" style={{display: show ? 'grid' : 'none'}}>
            <button className="controller__button one" value={'left'}>left</button>
            <button className="controller__button two" value={'up'}>up</button>
            <button className="controller__button three" value={'bottom'}>bottom</button>
            <button className="controller__button four" value={'right'}>right</button>
        </div>
    )
}