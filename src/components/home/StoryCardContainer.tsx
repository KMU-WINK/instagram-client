import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import StoryCard from "./StoryCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper";
import "swiper/css";
// @ts-ignore
import StoryExample_1 from "../../img/StoryExample_1.png";
// @ts-ignore
import StoryExample_2 from "../../img/StoryExample_2.png";
// @ts-ignore
import StoryExample_3 from "../../img/StoryExample_3.png";
// @ts-ignore
import StoryExample_4 from "../../img/StoryExample_4.png";
// @ts-ignore
import StoryExample_5 from "../../img/StoryExample_5.png";

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

export default function StoryCardContainer() {
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
				<StoryCard url={StoryExample_1} isFocus={activeIndex == 0 ? true : false} />
			</SwiperSlide>
			<SwiperSlide>
				<StoryCard url={StoryExample_2} isFocus={activeIndex == 1 ? true : false} />
			</SwiperSlide>
			<SwiperSlide>
				<StoryCard url={StoryExample_3} isFocus={activeIndex == 2 ? true : false} />
			</SwiperSlide>
			<SwiperSlide>
				<StoryCard url={StoryExample_4} isFocus={activeIndex == 3 ? true : false} />
			</SwiperSlide>
			<SwiperSlide>
				<StoryCard url={StoryExample_5} isFocus={activeIndex == 4 ? true : false} />
			</SwiperSlide>
			<SwiperSlide>
				<StoryCard url={StoryExample_1} isFocus={activeIndex == 5 ? true : false} />
			</SwiperSlide>
			<SwiperSlide>
				<StoryCard url={StoryExample_2} isFocus={activeIndex == 6 ? true : false} />
			</SwiperSlide>
		</Slide>
	);
}
