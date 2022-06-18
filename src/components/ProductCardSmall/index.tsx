import React, {FC} from 'react';
import alarm from "../../assets/icon/ux4150.jpg"

export const PrdCardSmall: FC = () => {
    return (
        <div className="prd-card-s">
            <div className="prd-card-s__block">
                <div className="prd-card-s__picture">
                    <img className="prd-card-s__img" src={alarm}/>
                </div>
                <div>

                </div>
            </div>
        </div>
    );
};