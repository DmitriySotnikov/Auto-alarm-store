import React, {FC} from 'react';
import "../../../styles/cart.scss"
import alarm from "../../../assets/icon/ux4150.jpg"
import trashCan from "../../../assets/icon/trash-can.svg"
import heart from "../../../assets/icon/heart-grey.svg"
import plus from "../../../assets/icon/plus.svg"
import minus from "../../../assets/icon/minus.svg"

export const Cart: FC = () => {
    return (
        <div className="cart">
            <div className="cart__title">
                <h1 className="cart__title-text">Корзина</h1>
                <div className="cart__prd-count">2 товара</div>
            </div>
            <div className="cart__content">
                <div className="cart__box">
                    <div className="cart__box-pic">
                        <img className="cart__box-img" src={alarm}/>
                    </div>
                    <div className="cart__prd-name">
                        <h2 className="cart__prd-name-text">Автосигнализация Pandora DXL-90 LORA</h2>
                        <div className="cart__ptr-art">
                            <span className="cart__ptr-art-prefix">артикул</span>
                            <span className="cart__ptr-art-number">123456789</span>
                        </div>
                    </div>
                    <div className="cart__box-price-count">
                        <div className="cart__box-price">
                            <span className="cart__price">23 700 ₽</span>
                        </div>
                        <div className="cart__count-block">
                            <div className="cart__count-block-button">
                                <img src={plus}/>
                            </div>
                            <div className="cart__count-block-count">
                                <span className="cart__count-block-number">1</span>
                            </div>
                            <div className="cart__count-block-button">
                                <img src={minus}/>
                            </div>
                        </div>
                    </div>
                    <div className="cart__box-end-block">
                        <div className="cart__box-in-favorites">
                            <img className="cart__end-block-img" src={heart}/>
                        </div>
                        <div className="cart__box-remove">
                            <img className="cart__end-block-img" src={trashCan}/>
                        </div>
                    </div>
                </div>
                <div className="cart__check">
                    <div className="cart__check-title">
                        Ваш заказ
                    </div>
                    <div className="cart__check-count">
                        <div className="cart__check-count-text">{`Товаров(${1}`})</div>
                        <div className="cart__check-count-price">23 700 ₽</div>
                    </div>
                    <div className="cart__check-value">
                        <div className="cart__check-value-text">Итого:</div>
                        <span className="cart__check-sum">{`${"23 700"} ₽`}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};