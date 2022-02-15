import React from 'react';
import styled from "styled-components";
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import FeedHeader from "./FeedHeader";
import FeedFooter from "./FeedFooter";
// @ts-ignore
import Sea from '../../img/sea.jpg';

const FeedContainer = styled.div`
	width:828px;
`;

const FeedImg = styled.img`
  background: #C4C4C4;
	width:100%;
	height:828px;
`;

export default function MainFeed() {
	return <>
		<FeedContainer>
			<FeedHeader/>
			<Swiper
				modules={[Pagination]}
				slidesPerView={1}
				pagination={{ clickable: true }}
			>
				<SwiperSlide><FeedImg src={Sea}/></SwiperSlide>
			</Swiper>//todo:swiper지우고직접슬라이드만들거나..swiper해결하거나
			<FeedFooter/>
		</FeedContainer>

		</>
}