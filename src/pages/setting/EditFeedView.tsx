import React from "react";
import styled from "styled-components";
import ModeSettingBox from "../../components/settings/EditFeed/ModeSettingBox";
import ModalBodyContainer from "../../components/settings/ModalBodyContainer";
import ScrollContainer from "../../components/settings/ScrollContainer";
import BoxContainer from "../../components/settings/BoxContainer";
import ColorBox from "../../components/settings/EditFeed/ColorBox";
import CategorySettingBox from "../../components/settings/EditFeed/CategorySettingBox";

export default function EditFeedView() {
	return (
		<>
			<ModalBodyContainer>
				<ScrollContainer>
					<BoxContainer>
						<ModeSettingBox />
						<ColorBox />
						<CategorySettingBox />
					</BoxContainer>
				</ScrollContainer>
			</ModalBodyContainer>
		</>
	);
}