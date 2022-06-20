import React, {FC} from 'react';
import alarm from "../../assets/icon/ux4150.jpg"
import {Button} from "../Button";
import {IconSprite} from "../IconSprite";
//import {products} from "../../util/catalog_mock_data";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {useSelector} from "react-redux";
import {RootState} from "../../store/store";


export const PrdCardSmall: FC = () => {

    const {products} = useAppSelector(state => state.product)

    const {} = useSelector((state: RootState) => state)

    const {} = useAppDispatch()

    const Handler = () => {
        console.log("click")
    }

    const toFavoriteHandler = () => {
        console.log("favorite!")
    }

    return (
        <div className="prd-card-s__container">
            {
                products.map( el => {
                    return (
                        <div className="prd-card-s" key={el.id}>
                        <div className="prd-card-s__block">
                            <div className="prd-card-s__picture">
                                <img className="prd-card-s__img" src={alarm}/>
                            </div>
                            <div className="prd-card-s__title">
                    <span className="prd-card-s__title-text">
                        {el.name}
                    </span>
                            </div>
                            <div className="prd-card-s__rating">
                                <span className="prd-card-s__stars-line prd-card-s__stars-line--4"/>
                            </div>
                            <div className="prd-card-s__price">
                                {el.price}
                            </div>
                            <div className="prd-card-s__buy-wrap">
                                <Button isDisable={false} onClick={Handler} title={"Купить"} classname={"prd-card-s__buy-button"}/>
                                <svg className="prd-card-s__toFavorite" onClick={toFavoriteHandler}>
                                    <use xlinkHref="#Heart"/>
                                </svg>
                            </div>
                        </div>
                        <IconSprite/>
                    </div>
                    )
                })
            }
        </div>
    );
};