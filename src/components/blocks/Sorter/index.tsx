import React, {FC, useState} from 'react';
import arrow from "../../../assets/icon/arrow.svg"
import "../../../styles/_sorter.scss"

export const Sorter: FC = () => {

    const [arrowPrice, setArrowPrice] = useState(false)
    const [arrowPopular, setArrowPopular] = useState(false)

    return (
        <div className="sorter">
            <div className="sorter-title">
                <span className="sorter-titleText">Сортировать по :</span>
            </div>
            <div className="sorter-item">
                <span className="sorter-itemText" onClick={() => {setArrowPrice(!arrowPrice)}}>По цене</span>
                <img className={arrowPrice ? "sorter-arrow sorter-arrow_down" : "sorter-arrow"} src={arrow}/>
            </div>
            <div className="sorter-item">
                <span className="sorter-itemText" onClick={() => {setArrowPopular(!arrowPopular)}}>По новизне</span>
                <img className={arrowPopular ? "sorter-arrow sorter-arrow_down" : "sorter-arrow"} src={arrow}/>
            </div>
        </div>
    );
};