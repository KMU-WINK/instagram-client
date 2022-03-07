import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import HighlightCard from "./HighlightCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper";
import "swiper/css";
// @ts-ignore
import Highlight_1 from "../../img/Highlight_1.png"
// @ts-ignore
import Highlight_2 from "../../img/Highlight_2.png"
// @ts-ignore
import Highlight_3 from "../../img/Highlight_3.png"
// @ts-ignore
import Highlight_4 from "../../img/Highlight_4.png"
// @ts-ignore
import Highlight_5 from "../../img/Highlight_5.png"

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
				<HighlightCard image={Highlight_1} isFocus={activeIndex == 0 ? true : false} />
			</SwiperSlide>
			<SwiperSlide>
				<HighlightCard image={Highlight_2}  isFocus={activeIndex == 1 ? true : false} />
			</SwiperSlide>
			<SwiperSlide>
				<HighlightCard image={Highlight_3}  isFocus={activeIndex == 2 ? true : false} />
			</SwiperSlide>
			<SwiperSlide>
				<HighlightCard image={Highlight_4}  isFocus={activeIndex == 3 ? true : false} />
			</SwiperSlide>
			<SwiperSlide>
				<HighlightCard image={Highlight_5}  isFocus={activeIndex == 4 ? true : false} />
			</SwiperSlide>
		</Slide>
	);
}
