import React, {FC} from "react";

interface DotsProps {
  activeIndex: number
  sliderImage: {
    urls: string
    title: string
    description: string
  }[]
  onclick: (index: number) => void
}

export const Tabs: FC<DotsProps> = ({ activeIndex, onclick, sliderImage }) => {
  return (
    <div className="slider__tabs">
      {sliderImage.map((slide, index) => (
        <span
    key={index}
    className={`${activeIndex === index ? "slider__tab slider__tab--active" : "slider__tab"}`}
    onClick={() => onclick(index)}
    />
      ))}
    </div>
  );
}