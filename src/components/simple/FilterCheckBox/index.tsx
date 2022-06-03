import React, {ChangeEvent, FC} from 'react';
import "../../../styles/_checkbox.scss"

export const CheckBoxField: FC = () => {

    const handler = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.checked)
        console.log(event.target.value)
    }

    return (
        <div className="checkbox">
            <label className="checkbox-label">
                <input className="checkbox-input"
                       type="checkbox"
                       onChange={handler}
                       />
                <span className="checkbox-icon"/>
                <span className="checkbox-textTitle">С автозапуском</span>
            </label>
        </div>
    );
};