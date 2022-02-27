import React from "react";
import styled from "styled-components";
import ModeSettingBox from "../../components/settings/EditFeed/ModeSettingBox";
import ModalBodyContainer from "../../components/settings/ModalBodyContainer";
import ScrollContainer from "../../components/settings/ScrollContainer";
import BoxContainer from "../../components/settings/BoxContainer";
import ColorBox from "../../components/settings/EditFeed/ColorBox";
import CategorySettingBox from "../../components/settings/EditFeed/CategorySettingBox";
import TestBox from "../../components/settings/EditFeed/TestBox";

export default function EditFeedView() {
	return (
		<>
			<ModalBodyContainer>
				<ScrollContainer>
					<BoxContainer>
						<ModeSettingBox />
						<ColorBox />
						<CategorySettingBox />
						<TestBox />
					</BoxContainer>
				</ScrollContainer>
			</ModalBodyContainer>
		</>
	);
}
