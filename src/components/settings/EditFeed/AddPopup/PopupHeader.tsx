import React from "react";
import styled from "styled-components";
// @ts-ignore
import close from "../../../../img/close.png";
// @ts-ignore
import BackImg from "../../../../img/BackBtn.png";

const PopupHeaderContainer = styled.div`
	width: 100%;
	height: 60px;
	border-bottom: 1px solid #b4b4b4;
`;

const HeaderText = styled.div`
	display: inline-block;
	position: relative;
	top: -10px;
	left: 300px;
	font-weight: bold;
	font-size: 24px;
`;

const BackBtn = styled.img`
	position: relative;
	left: 15px;
	top: 3px;
	width: 50px;
	height: 50px;
`;

const CancelBtn = styled.img`
	position: relative;
	left: 580px;
	top: -8px;
	width: 24px;
	height: 24px;
`;

export default function PopupHeader() {

	return (
		<>
			<PopupHeaderContainer>
				<BackBtn src={BackImg}/>
				<HeaderText>카테고리 편집</HeaderText>
				<CancelBtn src={close} />
			</PopupHeaderContainer>

		</>
	);
}
