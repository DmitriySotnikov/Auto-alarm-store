import React, {FC} from 'react';
import '../../../styles/_catalogButton.scss'

export const Button: FC = () => {
    return (
        <div className="buttonContainer">
            <button className="catalogButton">
                Каталого товаров
            </button>
        </div>
    );
};