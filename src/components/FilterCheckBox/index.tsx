import React, {ChangeEvent, FC, useState} from 'react';
import {filterItems} from "../../util/catalog_mock_data"

export const CheckBoxField: FC = () => {

    const [active, setActive] = useState<boolean>(false)

    const handler = (event: ChangeEvent<HTMLInputElement>) => {
        setActive(event.target.checked)
    }

    return (
        <div>
            {filterItems.map(el => {
                    return (
                        <div className="filterItem">
                            <hr className="filterItem-separator"/>
                            <span className="filterItem-title">{el.title}</span>
                            <div className="filterItem-checkboxList">
                                {
                                    el.checkbox.map( i => {
                                        return (
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
                                                    <span className="filterItem-selectorText">{i.name}</span>
                                                    <span className="filterItem-selectorCount">{i.count}</span>
                                                </div>
                                            </label>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )
                }
            )}
        </div>
    );
};