import React, {FC} from "react";
import {Link} from "react-router-dom";
import "../../../styles/_headerBottom.scss";
import "../../../styles/_cart-mini.scss"
import cart from "../../../assets/icon/basket.svg";

interface prop {
    cartCount: number
}

export const Cart: FC<prop> = ({cartCount}) => {
    return (
        <div className="headerButton cartBlock">
            <Link className="cartBlock-link" to={""}/>
            <img className='cartBlock-img' src={cart}/>
            <span className="cartBlock-count">{cartCount}</span>
        </div>
    );
};