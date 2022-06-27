import React, {FC} from 'react';
import {FilterRange} from "../FilterRange";
import {FilterItem} from "../FilterItem";

export const CatalogFilters: FC = () => {
    return (
        <div className="catalogFilter">
            <FilterRange/>
            <FilterItem/>
        </div>
    );
};