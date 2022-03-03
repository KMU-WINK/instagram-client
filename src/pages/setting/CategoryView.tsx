import React, { useState } from "react";
import styled from "styled-components";
import SideNavigationBar from "../../components/settings/SideNavigationBar";
import EditProfileView from "./EditProfileView";
import EditFeedView from "./EditFeedView";
import CategoryEditPopupView from "./CategoryEditPopupView";
import CategoryAddPopupView from "./CategoryAddPopupView";

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

const menuList = [
	{
		id: "프로필 편집",
		content: <EditProfileView />
	},
	{
		id: "피드 편집",
		content: <EditFeedView />
	},
	{
		id: "비밀번호 변경",
		content: <EditProfileView />
	},
	{
		id: "앱 및 웹사이트",
		content: <CategoryAddPopupView />
	},
	{
		id: "이메일 및 SMS",
		content: <EditFeedView />
	}, 
	{
		id: "푸시 알림",
		content: <EditFeedView />
	}, 
	{
		id: "연락처 관리",
		content: <EditFeedView />
	}, 
	{
		id: "개인정보 및 보안",
		content: <EditFeedView />
	}, 
	{
		id: "로그인 활동",
		content: <EditFeedView />
	}, 
	{
		id: "프로페셔널 계정으로 전환",
		content: <EditFeedView />
	}
];

export default function CategoryView() {
	const [activeTab, setActiveTab] = useState(0);

	const getMenuId = (index: number) => {
		setActiveTab(index);
	};
	return (
		<>
			<SettingsModal>
				<ModalHeader>
					<HeaderText>설정</HeaderText>
				</ModalHeader>
				<ModalBody>
					<SideNavigationBar getMenuId={getMenuId} />
					{menuList[activeTab].content}
				</ModalBody>
			</SettingsModal>
		</>
	);
}
