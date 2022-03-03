import React from "react";
import styled from "styled-components";
import ModalBodyContainer from "../../components/settings/ModalBodyContainer";
import ScrollContainer from "../../components/settings/ScrollContainer";
import BoxContainer from "../../components/settings/BoxContainer";
import BlueButton from "../../components/common/BlueButton";
const Header = styled.div`
	width: 600px;
	height: 40px;
	background-color: #DCDBDB;
	border-radius: 8px;
	margin-left: 100px;
	font-size: 18px;
	line-height: 35px;
`
export default function CategoryAddPopupView() {

	return (
		<>
			<ModalBodyContainer>
				<ScrollContainer>
					<BoxContainer style={{padding: "36px 35px 0px 50px"}}>
						<Header>UX 디자인</Header>
						<BlueButton height={36} width={86}>완료</BlueButton>
					</BoxContainer>
				</ScrollContainer>
			</ModalBodyContainer>
		</>
	);
}
