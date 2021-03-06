import React, { useState } from "react";
import styled from "styled-components";
import SideBar from "../../components/businessCard/SideBar";
import ModalHeader from "../../components/businessCard/ModalHeader";
import CardMain from "../../components/businessCard/CardMain";
import CardFront from "../../components/businessCard/CardFront";
import CardBack from "../../components/businessCard/CardBack";

const CardSettingsModal = styled.div`
	position: fixed;
	top: 40px;
	left: 363px;
	width: 1250px;
	height: 800px;
	border-radius: 16px;
	border: 1px solid beige;
`;

const ModalBody = styled.div`
	display: flex;
	flex-direction: row;
	width: 1250px;
	height: 740px;
`;

export default function CardSettingView() {
	const [state, setState] = useState("");

	const getPalette = (color: string) => {
		console.log(color);
		setState(color);
	};

	const getAlign = (value: string) => {};

	return (
		<>
			<CardSettingsModal>
				<ModalHeader headerTitle={"명함 스타일 설정"} />
				<ModalBody>
					<CardMain>
						<CardFront color={state} alignValue={"left"} />
						<CardBack color={state} />
					</CardMain>
					<SideBar page={"스타일"} getPalette={getPalette} getAlign={getAlign} />
				</ModalBody>
			</CardSettingsModal>
		</>
	);
}
