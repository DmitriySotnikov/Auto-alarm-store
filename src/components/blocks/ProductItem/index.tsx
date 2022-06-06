import React, {FC} from 'react';
import "../../../styles/_productItem.scss"
import heart from "../../../assets/icon/heart.svg"
import {Link} from "react-router-dom";
import {products} from "../../../util/catalog_mock_data"
import img from "../../../assets/icon/ux4150.jpg"

export const ProductItem: FC = () => {
    return (
        <div className="product-item__container">
            { products.map( el => {
                    return (
                        <div className="product-item">
                            <div className="product-item__content">
                                <div className="product-item__img-block">
                                    <Link className="product-item__link" to={"#"}>
                                        <img className="product-item__img" src={img} alt={""}/>
                                    </Link>
                                </div>
                                <div className="product-item__info">
                                    <span className="product-item__type">{el.type}</span>
                                    <span className="product-item__product-name">{el.name}</span>
                                    <span className="product-item__stars-line product-item__stars-line--4"/>
                                </div>
                                <div className="product-item__buy">
                                    <span className="product-item__price">{`${el.price} ₽`}</span>
                                    <div className="product-item__favorite-img">
                                        <img className="product-item__to-favorite" src={heart} alt={""}/>
                                    </div>
                                    <Link className="product-item__submit-button" to={"#"}>Купить</Link>
                                </div>
                            </div>
                        </div>
                    )})}
        </div>
    );
};