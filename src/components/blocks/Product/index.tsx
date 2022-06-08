import React, {FC} from 'react';
import "../../../styles/_prd.scss"
import comments from "../../../assets/icon/comment.svg"

export const Product: FC = () => {
    return (
        <div className="prd">
            <div className="prd__header">
                <h1 className="prd__header-text">Pandora DX 4GL plus</h1>
                <div className="prd__rating-reviews">
                    <span className="prd__rating-stars-line product-rating-stars-line--4"/>
                    <span className="prd__rating-count">5 баллов</span>
                    <span className="prd__reviews-count">( 10 голосов )</span>
                </div>
                <div className="prd__comment-block">
                    <img className="prd__comment-icon" src={comments}/>
                    <span className="prd__comment-title">Комментариев</span>
                    <span className="prd__comment-count">15</span>
                </div>
            </div>
            <div className="prd__average-block">
                <div className="prd__price-wrap">
                    <span className="prd__price">34 059 ₽</span>
                </div>
            </div>

        </div>
    );
};