import styled from "styled-components";
import React from 'react';
import { Font1_Light,FontBold } from "../style/Font";
// @ts-ignore
import more from '../../img/more.png';
// @ts-ignore
import Border from '../../img/profileBorder.png';

const HeaderContainer = styled.div `
	height:71px;
	display:flex;
  border: 1px solid #E0E0E0;
  border-radius: 3px 3px 0px 0px;
  align-items: center;
`;

const FeedProfile = styled.img`
	width: 40px;
	height: 40px;
  border-radius: 100%;
  margin:0 0 0 16px;
`;

const ProfileRight = styled.div`
	margin-left:11px;
`;
const More = styled.img`
	margin-left:auto;
	margin-right: 23px;
`

export default function FeedHeader() {
	return <>
		<HeaderContainer>
				<FeedProfile src={Border}/>
				<ProfileRight>
					<FontBold>Insta_123</FontBold>
					<Font1_Light>place</Font1_Light>
				</ProfileRight>
			<More src={more}/>
		</HeaderContainer>
	</>
}