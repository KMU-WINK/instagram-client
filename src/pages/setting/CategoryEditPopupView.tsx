import React from "react";
import styled from "styled-components";
import ModalBodyContainer from "../../components/settings/ModalBodyContainer";
import ScrollContainer from "../../components/settings/ScrollContainer";
import BoxContainer from "../../components/settings/BoxContainer";
import CategoryBox from "../../components/settings/EditFeed/CategoryBox";
import AddCategoryBox from "../../components/settings/EditFeed/AddCategoryBox";
import PopupHeader from "../../components/settings/EditFeed/AddPopup/PopupHeader";
import { useNavigate } from "react-router-dom";

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
					<ScrollContainer>
						<BoxContainer style={{
							padding: "40px 60px",
							display: "grid",
							gridTemplateColumns: "repeat(3, 1fr)",
							gridColumnGap: "38px"
						}}>
							<CategoryBox width={215} height={251} state={false} />
							<CategoryBox width={215} height={251} state={false} />
							<CategoryBox width={215} height={251} state={false} />
							<CategoryBox width={215} height={251} state={false} />
							<AddCategoryBox width={215} height={251} onClick={handleOnClick} />
						</BoxContainer>
					</ScrollContainer>
				</PopupBodyContainer>
			</SettingsModal>

		</>
	);
}
