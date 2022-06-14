import React, {FC, useState} from 'react';
import arrow from "../../assets/icon/arrow.svg"

export const Sorter: FC = () => {

    const [arrowPrice, setArrowPrice] = useState(false)
    const [arrowPopular, setArrowPopular] = useState(false)

    return (
        <div className="sorter">
            <div className="sorter__title">
                <span className="sorter__title-text">Сортировать по :</span>
            </div>
            <div className="sorter__item">
                <span className="sorter__item-text" onClick={() => {setArrowPrice(!arrowPrice)}}>По цене</span>
                <img className={arrowPrice ? "sorter__arrow sorter__arrow--down" : "sorter__arrow"} src={arrow}/>
            </div>
            <div className="sorter__item">
                <span className="sorter__item-text" onClick={() => {setArrowPopular(!arrowPopular)}}>По новизне</span>
                <img className={arrowPopular ? "sorter__arrow sorter__arrow--down" : "sorter__arrow"} src={arrow}/>
            </div>
        </div>
    );
};