import React, {FC} from 'react';
import {SliderAuto} from "../../components/CarouselAutoPlay/Slider";
import {PrdCardSmall} from "../../components/ProductCardSmall";
import {ProductItem} from "../../components/ProductItem";

export const Home: FC = () => {
    return (
        <div className="home__content">
            <SliderAuto/>
            <PrdCardSmall/>
           <ProductItem/>
        </div>
    );
};