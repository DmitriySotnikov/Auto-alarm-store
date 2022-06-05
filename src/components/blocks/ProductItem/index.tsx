import React, {FC} from 'react';
import "../../../styles/_productItem.scss"
import alarm from "../../../assets/icon/alarm.jpg";
import {Link} from "react-router-dom";

export const ProductItem: FC = () => {
    return (
        <div className="product-item">
            <div className="product-item__content">
                <div className="product-item__img-block">
                    <Link className="product-item__link" to={"#"}>
                        <img className="product-item__img" src={alarm}/>
                    </Link>
                </div>
                <div className="product-item__info">
                    <span className="product-item__info-title">Автосигнализации</span>
                    <span className="product-item__product-name">Pandora DXL - UX 4150</span>
                    <div className="product-item__star">

                    </div>
                </div>
                <Link to={"#"} className="product-item__submit-button">Подробнее</Link>
            </div>
        </div>
    );
};