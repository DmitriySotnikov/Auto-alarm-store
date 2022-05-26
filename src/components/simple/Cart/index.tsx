import React from "react";
import {Link} from "react-router-dom";
import "../../../styles/_headerBottom.scss";
import "../../../styles/_cart.scss"
import cart from "../../../assets/icon/basket.svg";

export const Cart = () => {
    return (
        <div className="headerButton cartBlock">
            <Link className="cartBlock-link" to={""}/>
            <img className='cartBlock-img' src={cart}/>
            <span className="cartBlock-count">1</span>
        </div>
    );
};