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

const Container = styled.div`
	width: 919px;
	height: 900px;
	text-align: center;
`;

const ScrollContainer = styled.div`
	width: 891px;
	margin-top: 20px;
	height: 860px;
	overflow-y: scroll;
	overflow-x: hidden;
	&::-webkit-scrollbar {
		width: 4px;
	}

	&::-webkit-scrollbar-thumb {
		height: 30%;
		background-color: #cdcdcd;
	}

	&::-webkit-scrollbar-track {
		background-color: #efefef;
	}
`;

const BoxContainer = styled.div`
	width: 760px;
`;

export default function EditProfileView() {
	return (
		<>
			<Container>
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
					</BoxContainer>
				</ScrollContainer>
			</Container>
		</>
	);
}
