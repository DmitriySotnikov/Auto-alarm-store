import React, {FC} from 'react';

export const Banners: FC = () => {
    return (
        <div className="banners">
            <div className="banners__item">
                <span className="banners__title">Предложения дня!</span>
            </div>
            <div className="banners__item banners__item--separator">
                <span className="banners__title">Акции!</span>
            </div>
        </div>
    );
};