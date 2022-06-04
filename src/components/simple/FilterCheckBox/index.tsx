import React, {ChangeEvent, FC, useState} from 'react';
import {filterItems} from "../../../util/catalog"
import "../../../styles/_filterItem.scss"

export const CheckBoxField: FC = () => {

    const [active, setActive] = useState<boolean>(false)
    const [active_1, setActive_1] = useState<boolean>(false)

    const handler = (event: ChangeEvent<HTMLInputElement>) => {
        setActive(event.target.checked)
    }
    const handler_1 = (event: ChangeEvent<HTMLInputElement>) => {
        setActive_1(event.target.checked)
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
                           checked={active}
                    />
                    <span className={active ?
                        "filterItem-icon filterItem-icon_checked" :
                        "filterItem-icon"
                    }/>
                    <div className="filterItem-selector">
                        <span className="filterItem-selectorText">есть</span>
                        <span className="filterItem-selectorCount">5</span>
                    </div>
                </label>
                <label className="filterItem-label">
                    <input className="filterItem-input"
                           type="checkbox"
                           onChange={handler_1}
                    />
                    <span className={active_1 ?
                        "filterItem-icon filterItem-icon_checked" :
                        "filterItem-icon"
                    }/>
                     <div className="filterItem-selector">
                        <span className="filterItem-selectorText">нет</span>
                        <span className="filterItem-selectorCount">0</span>
                    </div>
                </label>
            </div>
        </div>
    );
};