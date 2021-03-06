import React, {FC} from "react";
import {ProductItem} from "../../components/ProductItem";
import {Sidebar} from "../../components/CatalogSide";
import {Sorter} from "../../components/Sorter";
import {Tags} from "../../components/Tags";

export const Catalog: FC = () => {
    return (
        <div className="catalog">
            <div className="catalog__title">
                <h1 className="catalog__title-text">Автосигнализации</h1>
            </div>
            <div className="catalog__content">
                <Sidebar />
                <div className="catalog__right">
                    <Sorter/>
                    <Tags/>
                    <ProductItem/>
                </div>
            </div>
        </div>
    );
};