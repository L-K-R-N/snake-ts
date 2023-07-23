import { ReactNode } from "react";

export enum ButtonTypes {
    button = 'button',
    submit = 'submit',
    reset = 'reset',
}

export enum DataDirectionTypes {
    left = 'left',
    up = 'up',
    right = 'right',
    down = 'down',
}

interface Props {
    children: string | ReactNode;
    dataDirection?: DataDirectionTypes;
    classValue: DataDirectionTypes;
}

export const ConrollerButton: React.FC<Props> = ({children, classValue, ...props}) => {

    return (
        <button {...props} className={classValue}>
            {children}
        </button>
    )
}