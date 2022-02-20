import React from "react";
import sytled from "styled-components";
import styled from "styled-components";

import Container from "./Container";
import Title from "./Title";

const LabelContainer = styled.div`
	width: 520px;
	margin-top: 33px;
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
	margin-left: 8px;
`;

export default function ModeSettingBox() {
	return (
		<>
			<Container topMargin={55} height={95}>
				<Title content="다크 설정" />
				<LabelContainer>
					<CheckBox checked />
					<LabelText>화이트 모드</LabelText>
				</LabelContainer>
				<LabelContainer>
					<CheckBox />
					<LabelText>다크 모드</LabelText>
				</LabelContainer>
			</Container>
		</>
	);
}
