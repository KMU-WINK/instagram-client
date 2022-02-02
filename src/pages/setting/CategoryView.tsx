import React, { useState } from "react";
import styled from "styled-components";
import Categories from "../../components/settings/Categories";
import EditFeed from "../../components/settings/EditFeed";
import EditProfile from "../../components/settings/EditProfile";

const SettingsModal = styled.div`
	position: fixed;
	width: 1194px;
	height: 800px;
`;

const ModalHeader = styled.div`
	width: 100%;
	height: 64px;
	border-bottom: 1px solid #b4b4b4;
	text-align: center;
	font-size: 24px;
	font-weight: bold;
	line-height: 55px;
`;

const ModalBody = styled.div`
	display: flex;
`;

const SettingsNav = styled.nav`
	width: 267px;
	height: 550px;
	border-right: 1px solid #b4b4b4;
	border-bottom: 1px solid #b4b4b4;
`;

export default function CategoryView() {
	return (
		<>
			<SettingsModal>
				<ModalHeader>설정</ModalHeader>
				<ModalBody>
					<SettingsNav>
						<Categories></Categories>
					</SettingsNav>
					<EditFeed></EditFeed>
				</ModalBody>
			</SettingsModal>
		</>
	);
}
