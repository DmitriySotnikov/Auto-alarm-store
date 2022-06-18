import React, {FC} from 'react';
import alarm from "../../assets/icon/ux4150.jpg"
import {Button} from "../Button";
import {IconSprite} from "../IconSprite";
import {header} from "../../constants/Header";

export const PrdCardSmall: FC = () => {

    const Handler = () => {
        console.log("click")
    }

    const headerToFavorite = () => {
        console.log("FAVORITE!")
    }

    return (
        <div className="prd-card-s">
            <div className="prd-card-s__block">
                <div className="prd-card-s__picture">
                    <img className="prd-card-s__img" src={alarm}/>
                </div>
                <div className="prd-card-s__title">
                    <span className="prd-card-s__title-text">
                        Pandora DXL-90 Lora
                    </span>
                </div>
                <div className="prd-card-s__rating">
                    <span className="prd-card-s__stars-line prd-card-s__stars-line--4"/>
                </div>
                <div className="prd-card-s__price">
                    22 761 ₽
                </div>
                <div className="prd-card-s__buy-wrap">
                    <Button isDisable={false} onClick={Handler} title={"Купить"} classname={"prd-card-s__buy-button"}/>
                    <svg className="prd-card-s__toFavorite" onClick={headerToFavorite}>
                        <use xlinkHref="#Heart"/>
                    </svg>
                </div>
            </div>
            <IconSprite/>
        </div>
    );
};