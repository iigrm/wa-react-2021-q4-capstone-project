import React, { useRef, useState } from "react";

import * as S from "./Slider.style";

type Props = {
  items: {
    imageUrl: string;
    title: string;
    href: string;
    description: string;
  }[];
};
// TO-DO: Add left, right controls and autoplay
export const Slider = (props: Props) => {
  const [selectedSlide, setSelectedSlide] = useState(0);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleClick = (idx: number) => {
    const wrapper = wrapperRef.current;
    if (wrapper) {
      const width = wrapper.firstElementChild?.clientWidth || 0;
      wrapper.scroll({ left: width * idx, behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    const wrapper = wrapperRef.current;
    if (wrapper) {
      const width = wrapper.firstElementChild?.clientWidth || 0;
      const newValue = Math.floor(wrapper.scrollLeft / width);
      if (newValue !== selectedSlide) setSelectedSlide(newValue);
    }
  };
  return (
    <S.SliderContainer>
      <S.SliderWrapper ref={wrapperRef} onScroll={handleScroll}>
        {props.items.map((item, key) => (
          <S.SlideWrapper key={`slider_item_${key}`} data-testid="slider-item">
            <S.ImageSlider src={item.imageUrl} loading="lazy" />
            <S.TitleSlider>{item.title}</S.TitleSlider>
            <S.DescriptionSlider>{item.description}</S.DescriptionSlider>
          </S.SlideWrapper>
        ))}
      </S.SliderWrapper>
      <S.SliderControls>
        {props.items.map((item, idx) => (
          <S.SliderControl
            key={`slider_control_${idx}`}
            onClick={() => handleClick(idx)}
            selected={idx === selectedSlide}
          />
        ))}
      </S.SliderControls>
    </S.SliderContainer>
  );
};
