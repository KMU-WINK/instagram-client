import React from "react";
import styled from "styled-components";
import Container from "./Container";
import BlueButton from "../../common/BlueButton";
import Title from "./Title";

const AccountDisabledBtn = styled.button`
	color: #0095f6;
	background-color: #ffffff;
	border: none;
	font-size: 18px;
	line-height: 16px;
	margin-left: 100px;
`;

export default function FooterBox() {
	return (
		<>
			<Container topMargin={22} height={50}>
				<Title content={""} />
				<BlueButton
					onClick={() => {
						alert("제출!");
					}}
					style={{ marginTop: "5px" }}
					height={36}
					width={80}
				>
					제출
				</BlueButton>
				<AccountDisabledBtn>계정을 일시적으로 비활성화</AccountDisabledBtn>
			</Container>
		</>
	);
}
