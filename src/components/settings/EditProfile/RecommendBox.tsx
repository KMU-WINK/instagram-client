import React from "react";
import styled from "styled-components";
import Container from "./Container";
import Title from "./Title";

const LabelContainer = styled.div`
	width: 520px;
	display: grid;
	grid-template-columns: 22px 510px 20px;
`;

const CheckBox = styled.input.attrs({
	type: "checkbox",
})`
	float: left;
	width: 22px;
	height: 22px;
	border-radius: 5px;
	border: 1px #858585 solid;
	margin: 0;
`;

const LabelText = styled.label`
	font-size: 16px;
	color: #000000;
`;

const Tooltip = styled.div`
	color: #0095f6;
	font-size: 16px;
`;

export default function RecommendBox() {
	return (
		<>
			<Container topMargin={22} height={50}>
				<Title content="비슷한 계정 추천" />
				<LabelContainer>
					<CheckBox />
					<LabelText>팔로우할 만한 비슷한 계정을 추천할 때 회원님의 계정을 포함합니다.</LabelText>
					<Tooltip>[?]</Tooltip>
				</LabelContainer>
			</Container>
		</>
	);
}
