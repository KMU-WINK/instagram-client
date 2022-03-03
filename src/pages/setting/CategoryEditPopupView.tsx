import React from "react";
import styled from "styled-components";
import ModalBodyContainer from "../../components/settings/ModalBodyContainer";
import ScrollContainer from "../../components/settings/ScrollContainer";
import BoxContainer from "../../components/settings/BoxContainer";
import CategoryBox from "../../components/settings/EditFeed/CategoryBox";
import AddCategoryBox from "../../components/settings/EditFeed/AddCategoryBox";

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

export default function CategoryEditPopupView() {
	const handleOnClick = (e:any) => {
		alert('디자인 창');
	}
	return (
		<>
			<SettingsModal>
				<ModalHeader>
					<HeaderText>카테고리 편집</HeaderText>
				</ModalHeader>
				<ModalBodyContainer>
					<ScrollContainer>
						<BoxContainer style={{padding:"40px 60px", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridColumnGap:"38px"}}>
							<CategoryBox width={215} height={251} state={false}/>
							<CategoryBox width={215} height={251} state={false}/>
							<CategoryBox width={215} height={251} state={false}/>
							<CategoryBox width={215} height={251} state={false}/>
							<AddCategoryBox width={215} height={251} onClick={handleOnClick} />
						</BoxContainer>
					</ScrollContainer>
				</ModalBodyContainer>
			</SettingsModal>

		</>
	);
}
