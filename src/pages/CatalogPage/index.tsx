import React, {FC} from 'react';
import {Sidebar} from "../../components/CatalogSide";
import {Sorter} from "../../components/Sorter";
import {Tags} from "../../components/Tags";
import {ProductItem} from "../../components/ProductItem";
import {Cart} from "../../components/Cart";


export const Catalog: FC = () => {

    const flag = false

    return (
        <div className="catalog">
            <div className="catalog-title">
                <h1 className="catalog-titleText">Автосигнализации</h1>
            </div>
            <div className="catalog-content">
                <Cart/>
                {flag && <Sidebar />}
                {flag && <div className="catalog-right">
                    {flag && <Sorter/>}
                    {flag && <Tags/>}
                    {flag && <ProductItem/>}
                </div>}
            </div>
        </div>
    );
};