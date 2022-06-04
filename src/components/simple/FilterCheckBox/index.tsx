import React, {ChangeEvent, FC} from 'react';
import "../../../styles/_filterItem.scss"

export const CheckBoxField: FC = () => {

    const handler = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.checked)
        console.log(event.target.value)
    }

    return (
        <div className="filterItem">
            <hr className="filterItem-separator"/>
            <span className="filterItem-title">Автозапуск</span>
            <div className="filterItem-checkboxList">
                <label className="filterItem-label">
                    <input className="filterItem-input"
                           type="checkbox"
                           onChange={handler}
                    />
                    <span className="filterItem-icon"/>
                    <div className="filterItem-selector">
                        <span className="filterItem-selectorText">есть</span>
                        <span className="filterItem-selectorCount">5</span>
                    </div>
                </label>
                <label className="filterItem-label">
                    <input className="filterItem-input"
                           type="checkbox"
                           onChange={handler}
                    />
                    <span className="filterItem-icon"/>
                     <div className="filterItem-selector">
                        <span className="filterItem-selectorText">нет</span>
                        <span className="filterItem-selectorCount">0</span>
                    </div>
                </label>
            </div>
        </div>
    );
};