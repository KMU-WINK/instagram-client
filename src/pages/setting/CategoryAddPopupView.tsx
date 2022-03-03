import React from "react";
import styled from "styled-components";
import ModalBodyContainer from "../../components/settings/ModalBodyContainer";
import ScrollContainer from "../../components/settings/ScrollContainer";
import BoxContainer from "../../components/settings/BoxContainer";
import BlueButton from "../../components/common/BlueButton";
import HeadSection from "../../components/settings/EditFeed/AddPopup/HeadSection";
import PopupHeader from "../../components/settings/EditFeed/AddPopup/PopupHeader";

const SettingsModal = styled.div`
  position: fixed;
  top: 40px;
  left: 363px;
  width: 840px;
  height: 800px;
  border-radius: 16px;
  border: 1px solid beige;
`;
const Header = styled.div`
	width: 600px;
	height: 40px;
	background-color: #DCDBDB;
	border-radius: 8px;
	margin-left: 100px;
	font-size: 18px;
	line-height: 35px;
`;
export default function CategoryAddPopupView() {

	return (
		<>
			<SettingsModal>
				<PopupHeader />
				<ModalBodyContainer>
					<ScrollContainer>
						<HeadSection />
					</ScrollContainer>
				</ModalBodyContainer>
			</SettingsModal>
		</>
	);
}
