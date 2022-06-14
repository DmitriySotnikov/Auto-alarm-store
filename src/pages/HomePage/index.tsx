import React, {FC} from 'react';
import {SliderAuto} from "../../components/CarouselAutoPlay/Slider";
import {PrdCardSmall} from "../../components/ProductCardSmall";

export const Home: FC = () => {
    return (
        <div className="home__content">
            <SliderAuto/>
            <PrdCardSmall/>
        </div>
    );
};