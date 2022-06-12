import React, {FC} from 'react';
import "../../styles/_home.scss"
import {SliderAuto} from "../../components/blocks/CarouselAutoPlay/Slider";

export const Home: FC = () => {
    return (
        <div className="home__content">
            <SliderAuto/>
        </div>
    );
};