import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import HighlightCard from "../Feed/HighlightCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper";
import "swiper/css";
// @ts-ignore
import story_1 from "../../img/story_1.png"
// @ts-ignore
import story_2 from "../../img/story_2.png"
// @ts-ignore
import story_3 from "../../img/story_3.png"
// @ts-ignore
import story_4 from "../../img/story_4.png"
// @ts-ignore
import story_5 from "../../img/story_5.png"

const Slide = styled(Swiper)`
	box-sizing: border-box;
	.swiper-slide {
		transition: all 200ms linear;
	}

	.swiper-slide-active {
		margin:0 100px 0 130px;
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
				<HighlightCard image={story_1} isFocus={activeIndex == 0 ? true : false} />
			</SwiperSlide>
			<SwiperSlide>
				<HighlightCard image={story_2}  isFocus={activeIndex == 1 ? true : false} />
			</SwiperSlide>
			<SwiperSlide>
				<HighlightCard image={story_3}  isFocus={activeIndex == 2 ? true : false} />
			</SwiperSlide>
			<SwiperSlide>
				<HighlightCard image={story_4}  isFocus={activeIndex == 3 ? true : false} />
			</SwiperSlide>
			<SwiperSlide>
				<HighlightCard image={story_5}  isFocus={activeIndex == 4 ? true : false} />
			</SwiperSlide>
		</Slide>
	);
}
