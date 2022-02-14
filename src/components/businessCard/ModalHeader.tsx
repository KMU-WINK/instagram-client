import React from "react";
import styled from "styled-components";

// @ts-ignore
import BackImg from "../../img/BackBtn.png";

const HeaderContainer = styled.div`
	width: 1250px;
	height: 60px;
	text-align: center;
	border-bottom: 1px #c4c4c4 solid;
`;

const BackBtn = styled.img`
	float: left;
	margin-left: 20px;
	margin-top: 6px;
`;

const HeaderText = styled.span`
	position: relative;
	top: 14px;
	font-weight: bold;
	font-size: 21px;
`;

const NextBtn = styled.div`
	color: #0095f6;
	font-size: 16px;
	float: right;
	margin-right: 29px;
	margin-top: 19px;
`;

export default function ModalHeader() {
	return (
		<>
			<HeaderContainer>
				<BackBtn src={BackImg} />
				<HeaderText>명함 스타일 설정</HeaderText>
				<NextBtn>다음</NextBtn>
			</HeaderContainer>
		</>
	);
}
