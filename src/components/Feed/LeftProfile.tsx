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
import { Font2_Light, FontBold, FontNormal } from "../style/Font";

interface ButtonProps {
	width: number;
	height: number;
};

const FlexContainer = styled.div`
	display: flex;
	gap: 8px;
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

const Button = styled.div<ButtonProps>`
	display:flex;
	justify-content: center;
	width:${(props) => props.width}px;
	height:${(props) => props.height}px;
  border: 0.8px solid rgba(0, 0, 0, 0.6);
  border-radius: 4px;
	font-size: 16px;
	line-height:${(props) => props.height}px;
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

const Name = styled.div`
	margin: 40px 0;
`;

const SmallFontBold = styled(Font2_Light)`
	font-size: 16px;
	font-weight: bold;
`;

const SmallFont = styled(Font2_Light)`
	font-size: 16px;
`;

const BigFontBold = styled(Font2_Light)`
	font-size: 18px;
	font-weight: bold;
`;

const BigFont = styled(Font2_Light)`
	font-size: 18px;
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
				<Button width={141} height={40}>프로필 편집</Button>
				<SettingIcon src={CardImg}/>
			</EditContainer>
			<InfoContainer>
				<NumberContainer>
					<FlexContainer>
						<SmallFont>게시물:</SmallFont>
						<SmallFontBold>120</SmallFontBold>
					</FlexContainer>
					<FlexContainer>
						<SmallFont>게시물:</SmallFont>
						<SmallFontBold>120</SmallFontBold>
					</FlexContainer>
					<FlexContainer>
						<SmallFont>게시물:</SmallFont>
						<SmallFontBold>120</SmallFontBold>
					</FlexContainer>
				</NumberContainer>
				<SmallFont>@Bright_Ocean 님이 팔로우합니다.</SmallFont>
				<Name>
					<BigFontBold>김선호</BigFontBold>
					<BigFont>예술가</BigFont>
				</Name>
				<SmallFont>
					안녕하세요 예술가 김선호 입니다.
				</SmallFont>
			</InfoContainer>
			<Button width={400} height={60}>
				<img src={CardChange}/>
				프로필카드
			</Button>
		</LeftContainer>
	</>

}