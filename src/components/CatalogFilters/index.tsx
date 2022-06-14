import React, {FC} from 'react';
import {FilterRange} from "../FilterRange";
import {CheckBoxField} from "../FilterCheckBox";

export const CatalogFilters: FC = () => {
    return (
        <div className="catalogFilter">
            <FilterRange/>
            <CheckBoxField/>
        </div>
    );
};