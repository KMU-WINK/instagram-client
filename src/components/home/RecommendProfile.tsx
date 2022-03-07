import styled from "styled-components";
import React, { useState } from "react";
import { Font2_Light, Font2_Light_Bold, FontBlue, FontBold } from "../style/Font";
// @ts-ignore
import basicProfile from "../../img/profile.svg";

interface RecommendProps {
	id: string;
	//todo: profile,팔로워도 props로 관리하기
}

const ProfileContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 20px;
`;

const ProfileList = styled.div``;

const Profile = styled.img`
	width: 40px;
	height: 40px;
`;
export default function RecommendProfile(props: RecommendProps) {
	const [isFollow, setIsFollow] = useState(false);

	const FollowBtn = () => {
		if (isFollow) {
			setIsFollow(false);
		} else {
			setIsFollow(true);
		}
	};

	return (
		<>
			<ProfileContainer>
				<Profile src={basicProfile} />
				<ProfileList>
					<FontBold>{props.id}</FontBold>
					<Font2_Light>insta_111님 외 5명이 팔로우 합..</Font2_Light>
				</ProfileList>
				{isFollow ? (
					<Font2_Light onClick={FollowBtn}>팔로잉</Font2_Light>
				) : (
					<FontBlue onClick={FollowBtn}>팔로우</FontBlue>
				)}
			</ProfileContainer>
		</>
	);
}
