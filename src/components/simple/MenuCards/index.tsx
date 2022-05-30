import React, {FC} from 'react';
import "../../../styles/_menuCards.scss"
import alarm from "../../../assets/icon/alarm.jpg"
import {Link} from "react-router-dom";

export const Cards: FC = () => {
    return (
        <div className="menuCards">
            <div className="menuCards-item">
                <div className="menuCards-itemBlock">
                    <img className="menuCards-img" src={alarm}/>
                <span className="menuCards-title">Автосигнализации</span>
                </div>
                <Link to={" "} className="menuCards-submitButton">Подробнее</Link>
            </div>
            <div className="menuCards-item">
                <div className="menuCards-itemBlock">
                    <img className="menuCards-img" src={alarm}/>
                <span className="menuCards-title">Автосигнализации</span>
                </div>
                <Link to={" "} className="menuCards-submitButton">Подробнее</Link>
            </div>
            <div className="menuCards-item">
                <div className="menuCards-itemBlock">
                    <img className="menuCards-img" src={alarm}/>
                <span className="menuCards-title">Автосигнализации</span>
                </div>
                <Link to={" "} className="menuCards-submitButton">Подробнее</Link>
            </div>
        </div>
    );
};