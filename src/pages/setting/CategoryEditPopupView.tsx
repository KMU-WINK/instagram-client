import React from "react";
import styled from "styled-components";
import ScrollContainer from "../../components/settings/ScrollContainer";
import PopupHeader from "../../components/settings/EditFeed/Popup/PopupHeader";
import { useNavigate } from "react-router-dom";
import EditBodySection from "../../components/settings/EditFeed/Popup/EditBodySection";

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

export default function CategoryEditPopupView() {
	const navigate = useNavigate();

	const handleOnClick = (e: any) => {
		navigate("/setting/category/addcategory");
	};
	return (
		<>
			<SettingsModal>
				<PopupHeader />
				<PopupBodyContainer>
					<ScrollContainer style={{ width: "98%", height: "100%" }}>
						<EditBodySection />
					</ScrollContainer>
				</PopupBodyContainer>
			</SettingsModal>
		</>
	);
}
