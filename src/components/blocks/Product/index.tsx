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
                <div>
                    <img src={comments}/>
                </div>
            </div>

        </div>
    );
};