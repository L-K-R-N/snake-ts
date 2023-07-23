import { useActions } from "../../hooks/useActions";
import { useTypesSelector } from "../../hooks/useTypesSelector"
import { directions } from "../../types/game";
import { ConrollerButton, DataDirectionTypes } from "../UI/ControllerButton/ControllerButton";
import './ControllerBox.css'


export const ControllerBox: React.FC = () => {
    const {showController, direction, isPlaying} = useTypesSelector(state => state.game)
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
            <ConrollerButton classValue={DataDirectionTypes.left} dataDirection={DataDirectionTypes.left} children={'left'}></ConrollerButton>
            <ConrollerButton classValue={DataDirectionTypes.up} dataDirection={DataDirectionTypes.up} children={'up'}></ConrollerButton>
            <ConrollerButton classValue={DataDirectionTypes.down} dataDirection={DataDirectionTypes.down} children={'down'}></ConrollerButton>
            <ConrollerButton classValue={DataDirectionTypes.right} dataDirection={DataDirectionTypes.right} children={'right'}></ConrollerButton>
        </div>
    )
}