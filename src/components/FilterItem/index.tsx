import React, {ChangeEvent, FC, useState} from 'react';
import {filterItems} from "../../util/catalog-date"

export const FilterItem: FC = () => {

    const [active, setActive] = useState<boolean>(false)

    const handler = (event: ChangeEvent<HTMLInputElement>) => {
        setActive(event.target.checked)
    }

    return (
        <div>
            {filterItems.map(el => {
                    return (
                        <div className="filter-item" key={el.id}>
                            <hr className="filter-item__separator"/>
                            <span className="filter-item__title">{el.title}</span>
                            <div className="filter-item__checkboxList">
                                {
                                    el.checkbox.map( i => {
                                        return (
                                            <label className="filter-item__label" key={i.id}>
                                                <input className="filter-item__input"
                                                       type="checkbox"
                                                       onChange={handler}
                                                       checked={active}
                                                />
                                                <span className={active ?
                                                    "filter-item__icon filter-item__icon--checked" :
                                                    "filter-item__icon"
                                                }/>
                                                <div className="filter-item__selector">
                                                    <span className="filter-item__selector-text">{i.name}</span>
                                                    <span className="filter-item__selector-count">{i.count}</span>
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