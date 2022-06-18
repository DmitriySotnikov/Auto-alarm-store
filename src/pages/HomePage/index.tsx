import React, {FC} from 'react';
import {SliderAuto} from "../../components/CarouselAutoPlay/Slider";
import {PrdCardSmall} from "../../components/ProductCardSmall";
import {Banners} from "../../components/Banners";
import {Footer} from "../../components/Footer";

export const Home: FC = () => {
    return (
        <div className="home__content">
            <SliderAuto/>
            <PrdCardSmall/>
            <Banners/>
        </div>
    );
};