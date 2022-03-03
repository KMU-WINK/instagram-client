import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import HighlightCard from "./HighlightCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper";
import "swiper/css";

const Slide = styled(Swiper)`
	box-sizing: border-box;
	.swiper-slide {
		transition: all 200ms linear;
	}

	.swiper-slide-active {
		transform-origin: center center;
		transform: scale(1.57);
		z-index: 101;
	}
`;

export default function HighlightCardContainer() {
	const [activeIndex, setActiveIndex] = useState(0);
	return (
		<Slide
			slidesPerView={5}
			centeredSlides={true}
			navigation
			onSlideChange={(slide) => setActiveIndex(slide.activeIndex)}
			onSwiper={(swiper) => console.log(swiper)}
		>
			<SwiperSlide>
				<HighlightCard isFocus={activeIndex == 0 ? true : false} />
			</SwiperSlide>
			<SwiperSlide>
				<HighlightCard isFocus={activeIndex == 1 ? true : false} />
			</SwiperSlide>
			<SwiperSlide>
				<HighlightCard isFocus={activeIndex == 2 ? true : false} />
			</SwiperSlide>
			<SwiperSlide>
				<HighlightCard isFocus={activeIndex == 3 ? true : false} />
			</SwiperSlide>
			<SwiperSlide>
				<HighlightCard isFocus={activeIndex == 4 ? true : false} />
			</SwiperSlide>
			<SwiperSlide>
				<HighlightCard isFocus={activeIndex == 5 ? true : false} />
			</SwiperSlide>
			<SwiperSlide>
				<HighlightCard isFocus={activeIndex == 6 ? true : false} />
			</SwiperSlide>
		</Slide>
	);
}
