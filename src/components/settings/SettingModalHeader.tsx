import React from "react";
import styled from "styled-components";
// @ts-ignore
import close from "../../img/close.png";

const ModalHeader = styled.div`
	width: 100%;
	height: 60px;
	border-bottom: 1px solid #b4b4b4;
`;

const HeaderText = styled.div`
	position: relative;
	top: 14px;
	left: 578px;
	font-weight: bold;
	font-size: 24px;
`;

const CancelBtn = styled.img`
	position: relative;
	left: 1198px;
	top: -5px;
	width: 24px;
	height: 24px;
`;

export default function SettingModalHeader() {

	return (
		<>
			<ModalHeader>
				<HeaderText>설정</HeaderText>
				<CancelBtn src={close}/>
			</ModalHeader>
		</>
	);
}
