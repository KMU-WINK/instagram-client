import styled from "styled-components";
import React from 'react';
import Profile from "../common/Profile";
// @ts-ignore
import more from '../../img/more.png';
// @ts-ignore
import Border from '../../img/profileBorder.png';

const HeaderContainer = styled.div `
	width:100%;
	height:71px;
	display:flex;
  border: 1px solid #E0E0E0;
  border-radius: 3px 3px 0px 0px;
  align-items: center;
`;


const ProfileRight = styled.div`
	margin-left:11px;
`;
const Name = styled.div `
	font-size:14px;
  font-weight: bold;
`;

const SubName = styled.div `
  font-size:14px;
`;

const More = styled.img`
	margin-left:auto;
	margin-right: 23px;
`

export default function FeedHeader() {
	return <>
		<HeaderContainer>
				<Profile margin='0 0 0 16px' width='40px' height='40px' src={Border}/>
				<ProfileRight>
					<Name>Insta_123</Name>
					<SubName>place</SubName>
				</ProfileRight>
			<More src={more}/>
		</HeaderContainer>
	</>
}