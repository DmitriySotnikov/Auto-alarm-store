import React, {FC} from 'react';

interface props {
    children: React.ReactNode
}

export const Main: FC<props> = ({children}) => {
    return (
        <div className="layout">
            <div className="layout__container">
                {children}
            </div>
        </div>
    );
};