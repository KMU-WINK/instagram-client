import styled from "styled-components";
import React from 'react';
// @ts-ignore
import background from '../../img/sea.jpg';
// @ts-ignore
import profileImg from '../../img/profile.svg';
// @ts-ignore
import addBtn from '../../img/addStory.svg';
// @ts-ignore
import CardChange from '../../img/CardChange.svg';
// @ts-ignore
import CardImg from '../../img/Subtract.svg';
// @ts-ignore
import LinkImg from '../../img/facebook.svg';
import FeedButton from "./FeedButton";
import {
	Font2_Light,
	FontBold,
	FontNormal,
	Font2_16px_Bold,
	Font2_16px_Light,
	Font2_18px_Bold,
	Font2_18px_Light
} from "../style/Font";

const FlexContainer = styled.div`
	display: flex;
	gap: 8px;
	align-items: center;
`;

const LeftContainer = styled.div`
	width:480px;
`;
const BackgroundImg = styled.img `
  width:480px;
`;

const Profile = styled.div `
	position: relative;
	text-align: center;
	top:-80px;
	
`;

const ProfileImg = styled.img`
	
`;

const AddButton = styled.img`
	position: absolute;
	left: 280px;
	top: 120px;
`;

const ProfileName = styled(FontNormal)`
	font-size: 30px;
	margin-top: 20px;
`;

const EditContainer = styled.div`
	display:flex;
  justify-content: center;
`;

const SettingIcon = styled.img`
	margin-left:10px;
`;

const InfoContainer = styled.div`
  padding: 0 9%;
	;
`;
const NumberContainer = styled.div`
	display:flex;
	justify-content: space-between;
	margin:40px 0 16px 0;
`;

const ProfileContainer = styled.div`
	margin: 40px 0;
`;

const ProfileCardImg = styled.img`
	height: 17px;
`;

const ProfileContent = styled(Font2_16px_Light)`
	margin-bottom: 60px;
`;

const LinkContainer = styled.div`
  border: 0.8px solid rgba(0, 0, 0, 0.4);
  border-radius: 8px;
	padding: 20px;
`;

const Link = styled.div`
  border: 1px solid #DCDBDB;
	display:flex;
  align-items: center;
	padding-left: 20px;
	gap: 20px;
`;

const LinkImg = styled.img`
	height:36px;
`;

export default function LeftProfile() {
	return <>
		<LeftContainer>
			<BackgroundImg src={background}/>
			<Profile>
				<ProfileImg src={profileImg}/>
				<AddButton src={addBtn}/>
				<ProfileName>_SSunho_97</ProfileName>
			</Profile>
			<EditContainer>
				<FeedButton width="141px" height="40px">프로필 편집</FeedButton>
				<SettingIcon src={CardImg}/>
			</EditContainer>
			<InfoContainer>
				<NumberContainer>
					<FlexContainer>
						<Font2_16px_Light>게시물:</Font2_16px_Light>
						<Font2_16px_Bold>120</Font2_16px_Bold>
					</FlexContainer>
					<FlexContainer>
						<Font2_16px_Light>게시물:</Font2_16px_Light>
						<Font2_16px_Bold>120</Font2_16px_Bold>
					</FlexContainer>
					<FlexContainer>
						<Font2_16px_Light>게시물:</Font2_16px_Light>
						<Font2_16px_Bold>120</Font2_16px_Bold>
					</FlexContainer>
				</NumberContainer>
				<Font2_16px_Light>@Bright_Ocean 님이 팔로우합니다.</Font2_16px_Light>
				<ProfileContainer>
					<Font2_18px_Bold>김선호</Font2_18px_Bold>
					<Font2_18px_Light>예술가</Font2_18px_Light>
				</ProfileContainer>
				<ProfileContent>
					안녕하세요 예술가 김선호 입니다.
				</ProfileContent>
				<FeedButton width="100%" height="60px">
					<FlexContainer>
						<ProfileCardImg src={CardChange}/>
						<Font2_16px_Light>프로필카드</Font2_16px_Light>
					</FlexContainer>
				</FeedButton>
				<ProfileContainer>
					<Font2_16px_Bold>LinkTree</Font2_16px_Bold>
					<LinkContainer>
						<Link>
							<LinkImg src={LinkImg}/>
							<Font2_18px_Bold>김선호 SNS</Font2_18px_Bold>
						</Link>
					</LinkContainer>
				</ProfileContainer>
				<ProfileContainer>
					<Font2_16px_Light>Instagram Web Ver. 4.0</Font2_16px_Light>
				</ProfileContainer>
				<ProfileContainer>
					<Font2_16px_Bold>Designed by</Font2_16px_Bold>
					<Font2_16px_Light>Hyun jin Kim, Sun ho Kim, Ji Won Lee, Hye Won Yang, Chan Hee Shin, Yu Jin Jo</Font2_16px_Light>
				</ProfileContainer>
				<ProfileContainer>
					<Font2_16px_Bold>Developed by</Font2_16px_Bold>
					<Font2_16px_Light>Hyun jin Kim, Sun ho Kim, Ji Won Lee, Hye Won Yang, Chan Hee Shin, Yu Jin Jo</Font2_16px_Light>
				</ProfileContainer>
			</InfoContainer>
		</LeftContainer>
	</>

}