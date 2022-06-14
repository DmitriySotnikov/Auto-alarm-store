import React, {FC} from 'react';
import alarm from "../../../assets/icon/ux4150.jpg"
import {Link} from "react-router-dom";

export const Categories: FC = () => {
    return (
        <div className="categories__container">
            <div className="categories__item">
                <div className="categories__item-block">
                    <img className="categories__img" src={alarm}/>
                <span className="categories__title">Автосигнализации</span>
                </div>
                <Link to={" "} className="categories__submit-button">Подробнее</Link>
            </div>
        </div>
    );
};