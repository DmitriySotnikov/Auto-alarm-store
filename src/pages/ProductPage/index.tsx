import React, {FC} from 'react';
import {useParams} from "react-router-dom";
import {Product} from "../../components/Product";

export const ProductPage: FC = () => {

    const params = useParams()

    console.log(params)

    return (
        <div>
            <Product/>
        </div>
    );
};