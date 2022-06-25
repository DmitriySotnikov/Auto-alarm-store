import React, {FC} from "react";
import {Link} from "react-router-dom";
import {Routes} from "../../routes";

interface prop {
    cartCount: number
}

export const CartMini: FC<prop> = ({cartCount}) => {
    return (
        <div className="header-button header-button--cart-block">
            <Link className="cart-block__link" to={Routes.CART}>
                <span className='cart-block__icon' />
            </Link>
            <span className="cart-block__count">{cartCount}</span>
        </div>
    );
};