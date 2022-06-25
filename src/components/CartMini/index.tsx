import React, {FC} from "react";
import {Link} from "react-router-dom";
import cart from "../../assets/icon/basket.svg";
import {Routes} from "../../routes";

interface prop {
    cartCount: number
}

console.log(Routes.CART)

export const CartMini: FC<prop> = ({cartCount}) => {
    return (
        <div className="header-button header-button--cart-block">
            <Link className="cart-block__link" to={Routes.CART}>
                <img className='cart-block__img' src={cart}/>
            </Link>
            <span className="cart-block__count">{cartCount}</span>
        </div>
    );
};