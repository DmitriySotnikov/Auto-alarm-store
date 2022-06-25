import React, {FC} from 'react';
import {SliderAuto} from "../../components/CarouselAutoPlay/Slider";
import {PrdCardSmall} from "../../components/ProductCardSmall";
import {Banners} from "../../components/Banners";
import {Breadcrumb} from "../../components/Breadcrumb";

export const Home: FC = () => {
    return (
        <div className="home__content">
            <Breadcrumb/>
            <SliderAuto/>
            <PrdCardSmall/>
            <Banners/>
        </div>
    );
};