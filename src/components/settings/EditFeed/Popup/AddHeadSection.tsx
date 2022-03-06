import React from "react";
import styled from "styled-components";
import BlueButton from "../../../common/BlueButton";

const Container = styled.div`
	width: 100%;
	margin-top: 38px;
`;
const Header = styled.div`
	width: 600px;
	height: 40px;
	background-color: #dcdbdb;
	border-radius: 8px;
	margin-left: 100px;
	font-size: 18px;
	line-height: 35px;
	text-align: center;
`;

export default function AddHeadSection() {
	return (
		<>
			<Container>
				<Header>UX 디자인</Header>
				<BlueButton
					height={36}
					width={86}
					style={{ position: "relative", marginLeft: "680px", marginTop: "30px" }}
				>
					완료
				</BlueButton>
			</Container>
		</>
	);
}
