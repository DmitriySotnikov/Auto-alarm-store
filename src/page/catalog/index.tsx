import React, {FC} from 'react';
import "../../styles/_catalog.scss"
import {Sidebar} from "../../components/blocks/CatalogSide";
import {Sorter} from "../../components/blocks/Sorter";
import {Tags} from "../../components/blocks/Tags";
import {Cards} from "../../components/simple/MenuCards";
import {ProductItem} from "../../components/blocks/ProductItem";
import {Product} from "../../components/blocks/Product";
import {Cart} from "../../components/blocks/Cart";


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