import React, {FC} from 'react';
import "../../../styles/_catalogSide.scss"
import {NavigationItems} from "../../simple/NavigationItem";
import {CatalogFilters} from "../CatalogFilters";

export const CatalogSide: FC = () => {
    return (
        <div className="catalogSide">
            <div className="catalogSide-content">
                <CatalogFilters/>
            </div>
        </div>
    );
};