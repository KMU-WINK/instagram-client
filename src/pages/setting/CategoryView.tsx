import React, { useState } from "react";
import styled from "styled-components";
import SideNavigationBar from "../../components/settings/SideNavigationBar";
import EditProfileView from "./EditProfileView";
import EditFeedView from "./EditFeedView";

const SettingsModal = styled.div`
	position: fixed;
	top: 40px;
	left: 363px;
	width: 1200px;
	height: 960px;
	border-radius: 16px;
	border: 1px solid beige;
`;

const ModalHeader = styled.div`
	width: 100%;
	height: 60px;
	border-bottom: 1px solid #858585;
`;

const HeaderText = styled.div`
	position: relative;
	top: 14px;
	left: 578px;
	font-weight: bold;
	font-size: 24px;
`;

const ModalBody = styled.div`
	display: flex;
`;

const menuList = {
	0: <EditProfileView />,
	1: <EditFeedView />,
};

export default function CategoryView() {
	return (
		<>
			<SettingsModal>
				<ModalHeader>
					<HeaderText>설정</HeaderText>
				</ModalHeader>
				<ModalBody>
					<SideNavigationBar />
					{/*<EditProfileView />*/}
					<EditFeedView />
				</ModalBody>
			</SettingsModal>
		</>
	);
}
