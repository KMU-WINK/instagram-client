import React from "react";
import styled from "styled-components";
import ProfileBox from "../../components/settings/EditProfile/ProfileBox";
import CoverImageBox from "../../components/settings/EditProfile/CoverImageBox";
import NameBox from "../../components/settings/EditProfile/NameBox";
import UserNameBox from "../../components/settings/EditProfile/UserNameBox";
import WebsiteBox from "../../components/settings/EditProfile/WebsiteBox";
import IntroduceBox from "../../components/settings/EditProfile/IntroduceBox";
import EmailBox from "../../components/settings/EditProfile/EmailBox";
import PhoneBox from "../../components/settings/EditProfile/PhoneBox";
import GenderBox from "../../components/settings/EditProfile/GenderBox";
import RecommendBox from "../../components/settings/EditProfile/RecommendBox";
import ModalBodyContainer from "../../components/settings/ModalBodyContainer";
import ScrollContainer from "../../components/settings/ScrollContainer";
import BoxContainer from "../../components/settings/BoxContainer";
import FooterBox from "../../components/settings/EditProfile/FooterBox";

export default function EditProfileView() {
	return (
		<>
			<ModalBodyContainer>
				<ScrollContainer>
					<BoxContainer>
						<ProfileBox />
						<CoverImageBox />
						<NameBox />
						<UserNameBox />
						<WebsiteBox />
						<IntroduceBox />
						<EmailBox />
						<PhoneBox />
						<GenderBox />
						<RecommendBox />
						<FooterBox />
					</BoxContainer>
				</ScrollContainer>
			</ModalBodyContainer>
		</>
	);
}
