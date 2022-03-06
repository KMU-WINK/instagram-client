import React from "react";
import styled from "styled-components";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import FeedHeader from "./FeedHeader";
import FeedFooter from "./FeedFooter";
import Slider from "../common/Slider";
// @ts-ignore
import Sea from "../../img/sea.jpg";

const FeedContainer = styled.div`
	width: 828px;
`;

const FeedImg = styled.img`
	background: #c4c4c4;
	width: 100%;
	height: 828px;
`;

export default function MainFeed() {
	return (
		<>
			<FeedContainer>
				<FeedHeader />
				<Slider width="828px" height="828px" />
				<FeedFooter />
			</FeedContainer>
		</>
	);
}
