import React, {FC} from 'react';
import {CatalogFilters} from "../CatalogFilters";

export const Sidebar: FC = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-content">
                <CatalogFilters/>
            </div>
        </div>
    );
};