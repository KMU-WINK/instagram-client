import styled from "styled-components";
import React, { useState, useEffect } from "react";
import StoryCardContainer from "./StoryCardContainer";
// @ts-ignore
import close from "../../img/closeWhite.png";
import { useNavigate } from "react-router-dom";


const StoryDetailBackground = styled.div`
	width: 100wh;
	height: 100vh;
	z-index: 100;
	background: rgba(0, 0, 0, 0.8);
	backdrop-filter: blur(10px);
`;

const CloseBox = styled.img`
	position: relative;
	top: 20px;
	left: 1876px;
	width: 24px;
	height: 24px;
	z-index: 9999;
`;

export default function StoryDetail() {
	const navigate = useNavigate();
	const handleOnClick = () => {
		navigate(-2);
	}

	return (
		<StoryDetailBackground>
			<CloseBox src={close} onClick={handleOnClick}/>
			<StoryCardContainer />
		</StoryDetailBackground>
	);
}
