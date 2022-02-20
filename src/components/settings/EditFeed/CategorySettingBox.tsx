import React from "react";
import styled from "styled-components";
import Container from "./Container";
import Title from "./Title";
import BlueButton from "../../common/BlueButton";
// @ts-ignore
import TestImg from "../../../img/CateTestImg.png"
import CategoryBox from "./CategoryBox";

const InnerContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	margin-top: 35px;
	width: 775px;
`;

export default function CategorySettingBox() {
	return (
		<>
			<Container topMargin={55} height={620}>
				<Title content="카테고리 설정" />
				<InnerContainer>
					<CategoryBox />
					<CategoryBox />
					<CategoryBox />
					<CategoryBox />
					<CategoryBox />
					<CategoryBox />
				</InnerContainer>
			</Container>
		</>
	);
}
