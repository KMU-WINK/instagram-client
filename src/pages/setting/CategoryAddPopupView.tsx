import React from "react";
import styled from "styled-components";
import ScrollContainer from "../../components/settings/ScrollContainer";
import AddHeadSection from "../../components/settings/EditFeed/Popup/AddHeadSection";
import PopupHeader from "../../components/settings/EditFeed/Popup/PopupHeader";
import AddBodySection from "../../components/settings/EditFeed/Popup/AddBodySection";

const SettingsModal = styled.div`
	position: fixed;
	top: 40px;
	left: 363px;
	width: 840px;
	height: 800px;
	border-radius: 16px;
	border: 1px solid beige;
`;

const PopupBodyContainer = styled.div`
	width: 100%;
`;

export default function CategoryAddPopupView() {
	return (
		<>
			<SettingsModal>
				<PopupHeader />
				<PopupBodyContainer>
					<ScrollContainer style={{ width: "98%", height: "100%" }}>
						<AddHeadSection />
						<AddBodySection />
					</ScrollContainer>
				</PopupBodyContainer>
			</SettingsModal>
		</>
	);
}
