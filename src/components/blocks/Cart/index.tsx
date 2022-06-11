import React, {FC} from 'react';
import "../../../styles/cart.scss"
import alarm from "../../../assets/icon/ux4150.jpg"
import trashCan from "../../../assets/icon/trash-can.svg"
import heart from "../../../assets/icon/heart-grey.svg"

export const Cart: FC = () => {
    return (
        <div className="cart">
            <div className="cart__title">
                <h1 className="cart__title-text">Корзина</h1>
                <div className="cart__prd-count">2 товара</div>
            </div>
            <div className="cart__box">
                <div className="cart__box-pic">
                    <img className="cart__box-img" src={alarm}/>
                </div>
                <div className="cart__prd-name">
                    <h2>Автосигнализация Pandora DXL-90 LORA</h2>
                    <div className="cart__ptr-art">
                        <span className="cart__ptr-art-prefix">артикул</span>
                        <span className="cart__ptr-art-number">123456789</span>
                    </div>
                </div>
                <div className="cart__box-price-count">
                    <div>
                        <span>23 700 ₽</span>
                    </div>
                    <div className="cart__box-prd-count">
                        <div className="cart__box-prd-count-button">
                            +
                        </div>
                        <div className="cart__prd-count">
                            <span className="cart__prd-count-number">1</span>
                        </div>
                        <div className="cart__box-prd-count-button">
                            -
                        </div>
                    </div>
                </div>
                <div className="cart__box-end-block">
                    <div className="cart__box-in-favorites">
                        <img src={heart}/>
                    </div>
                    <div className="cart__box-remove">
                        <img src={trashCan}/>
                    </div>
                </div>
            </div>
        </div>
    );
};