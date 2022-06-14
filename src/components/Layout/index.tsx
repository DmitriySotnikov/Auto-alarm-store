import React, {FC} from 'react';

interface props {
    children: React.ReactNode
}

export const Layout: FC<props> = ({children}) => {
    return (
        <div className="layout">
            <div className="layout__container">
                {children}
            </div>
        </div>
    );
};