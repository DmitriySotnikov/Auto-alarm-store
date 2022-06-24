import React, {FC} from "react";
import {Link} from "react-router-dom";
import cart from "../../assets/icon/basket.svg";

interface prop {
    cartCount: number
}

export const CartMini: FC<prop> = ({cartCount}) => {
    return (
        <div className="header-button header-button--cart-block">
            <Link className="cart-block__link" to={""}/>
            <img className='cart-block__img' src={cart}/>
            <span className="cart-block__count">{cartCount}</span>
        </div>
    );
};