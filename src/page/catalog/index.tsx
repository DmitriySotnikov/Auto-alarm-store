import React, {FC} from 'react';
import "../../styles/_catalog.scss"
import {CatalogNavigation} from "../../components/blocks/CatalogNavigation";
import {Sorter} from "../../components/blocks/Sorter";
import {Tags} from "../../components/blocks/Tags";


export const Catalog: FC = () => {
    return (
        <div className="catalog">
            <div className="catalog-title">
                <h1 className="catalog-titleText">Автосигнализации</h1>
            </div>
            <div className="catalog-content">
                <CatalogNavigation />
                <div className="catalog-row">
                    <Sorter/>
                    <Tags/>
                </div>
            </div>
        </div>
    );
};