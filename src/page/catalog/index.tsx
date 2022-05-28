import React, {FC} from 'react';
import "../../styles/_catalog.scss"
import {CatalogNavigation} from "../../components/blocks/CatalogNavigation";


export const Catalog: FC = () => {
    return (
        <div className="catalog">
            <div className="catalog-title">
                <span className="catalog-titleText">Автосигнализации</span>
            </div>
            <div className="catalog-content">
                <CatalogNavigation />
            </div>
        </div>
    );
};