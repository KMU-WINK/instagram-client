import React from "react";
import styled from "styled-components";
import Container from "./Container";
import Title from "./Title";
import BlueButton from "../../common/BlueButton";

const LabelContainer = styled.div`
	display: inline-block;
	width: 120px;
	margin-top: 33px;
	margin-right: 24px;
`;

const CheckContainer = styled.div`
	display: flex;
	flex-direction: row;
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
			<Container style={{ borderBottom: "#C4C4C4 1px solid" }} topMargin={55} height={170}>
				<Title content="다크 설정" />
				<CheckContainer>
					<LabelContainer>
						<CheckBox checked />
						<LabelText>화이트 모드</LabelText>
					</LabelContainer>
					<LabelContainer>
						<CheckBox />
						<LabelText>다크 모드</LabelText>
					</LabelContainer>
				</CheckContainer>
				<BlueButton style={{ marginLeft: "625px" }} height={36} width={115}>
					적용하기
				</BlueButton>
			</Container>
		</>
	);
}
