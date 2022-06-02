import React, {FC} from 'react';
import "../../../styles/_checkbox.scss"

export const CheckBoxField: FC = () => {
    return (
        <div className="checkbox">
            <label>
                <input className="checkbox-input" type={"checkbox"}/>
                <span className="checkbox-icon"/>
                <span className="checkbox-textTitle">С автозапуском</span>
            </label>
        </div>
    );
};