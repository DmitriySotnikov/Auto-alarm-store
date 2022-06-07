import React, {FC} from 'react';
import "../../../styles/_prd.scss"

export const Product: FC = () => {
    return (
        <div className="prd">
            <div className="prd__header">
                <h1 className="prd__header-text">Pandora DX 4GL plus</h1>
                <div className="prd__header-rating">
                    <span className="prd__header-rating-stars-line product-header-rating-stars-line--4"/>
                    <span className="prd__header-rating-count">5 баллов</span>
                    <span>( 10 голосов )</span>
                </div>
            </div>

        </div>
    );
};