import React, {FC} from 'react';
import "../../../styles/_catalogFilters.scss"
import {FilterRange} from "../../simple/FilterRange";
import {CheckBoxField} from "../../simple/FilterCheckBox";

export const CatalogFilters: FC = () => {
    return (
        <div className="catalogFilter">
            <FilterRange/>
            <CheckBoxField/>
        </div>
    );
};