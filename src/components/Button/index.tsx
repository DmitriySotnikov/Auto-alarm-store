import React, {FC} from 'react';

interface IProps {
    isDisable: boolean
    onClick: () => void
    title: string
    classname: string
}

export const Button: FC<IProps> = ({isDisable, onClick, title, classname}) => {
    return (
        <div className="button-ui">
            <button
                className={`button-ui__basic ${classname}`}
                onClick={onClick}
                disabled={isDisable}
            >
                {title}
            </button>
        </div>
    );
};