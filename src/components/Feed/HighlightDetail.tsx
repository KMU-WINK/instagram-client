import styled from "styled-components";
import React, { useState, useEffect } from "react";
import HighlightCardContainer from "./HighlightCardContainer";
// @ts-ignore
import close from "../../img/closeWhite.png";
import { useNavigate } from "react-router-dom";

const HighlightDetailBackground = styled.div`
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

export default function HighlightDetail() {
	const navigate = useNavigate();
	const handleOnClick = () => {
		navigate(-1);
	}

	return (
		<HighlightDetailBackground>
			<CloseBox src={close} onClick={handleOnClick}/>
			<HighlightCardContainer />
		</HighlightDetailBackground>
	);
}
