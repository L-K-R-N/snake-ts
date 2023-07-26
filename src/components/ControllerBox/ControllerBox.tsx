import { useActions } from "../../hooks/useActions";
import { useTypesSelector } from "../../hooks/useTypesSelector"
import { directions } from "../../types/game";
import { ConrollerButton, DataDirectionTypes } from "../UI/ControllerButton/ControllerButton";
import './ControllerBox.css'


export const ControllerBox: React.FC = () => {
    const {direction, isPlaying} = useTypesSelector(state => state.game)
    const {showController} = useTypesSelector(state => state.settings)
    const {changeDirectionActionCreator} = useActions()

    const checkDirection = (newDirection: number[]) => {
		for (let i = 0; i < direction.length; i++) {
			if (direction[i] === newDirection[i]) {
				return true
			}
		}
		return false
	}
    
    const changePointerDirection = (e: React.MouseEvent) => {
        const target = e.target as Element;
        if (!target.hasAttribute('dataDirection')) return;

        switch (target.getAttribute('dataDirection')) {
            case "left":
                if (checkDirection(directions.right)) {
                    break
                } else {
                    changeDirectionActionCreator(directions.left)
                }	
                break
            case "up":
                if (checkDirection(directions.down)) {
                    break
                } else {
                    changeDirectionActionCreator(directions.up)
                }	
                break
            case "right":
                if (checkDirection(directions.right)) {
                break
                } else {
                    changeDirectionActionCreator(directions.right)
                }	
                break
            case "down":
                if (checkDirection(directions.up)) {
                    break
                } else {
                    changeDirectionActionCreator(directions.down)
                }	
                break
        }
    
    }
    return (
        <div onClick={(e) => changePointerDirection(e)} className="controllerBox" style={{display: showController && isPlaying ? 'grid' : 'none'}}>
            <ConrollerButton classValue={'left controller-button'} dataDirection={DataDirectionTypes.left} children={'left'}></ConrollerButton>
            <ConrollerButton classValue={'up controller-button'} dataDirection={DataDirectionTypes.up} children={'up'}></ConrollerButton>
            <ConrollerButton classValue={'down controller-button'} dataDirection={DataDirectionTypes.down} children={'down'}></ConrollerButton>
            <ConrollerButton classValue={'right controller-button' } dataDirection={DataDirectionTypes.right} children={'right'}></ConrollerButton>
        </div>
    )
}