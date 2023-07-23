import { ReactNode } from "react";

export enum ButtonTypes {
    button = 'button',
    submit = 'submit',
    reset = 'reset',
}

interface Props {
    children: string | ReactNode;
    type: ButtonTypes;

}

export const MyButton: React.FC<Props> = ({children, ...props}) => {

    return (
        <button {...props}>
            {children}
        </button>
    )
}