import styled from "styled-components";
import React from 'react';
// @ts-ignore
import logo from '../../img/logo.png';
// @ts-ignore
import searchIcon from '../../img/Search.png';
// @ts-ignore
import mainBtn from '../../img/mainBtn.png';
// @ts-ignore
import Union from '../../img/Union.png';
// @ts-ignore
import plus from '../../img/plus.png';
// @ts-ignore
import compass from '../../img/compass.png';
// @ts-ignore
import Heart from '../../img/Heart.png';
// @ts-ignore
import profile from '../../img/profile.svg';

const Logo = styled.img`
	width:104px;
	height:30px;
	margin-left:26px;
`;

const HeaderContainer = styled.div`
	position:fixed;
	width:100%;
	height:67px;
	background-color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
	display:flex;
  justify-content: space-between;
  align-items: center;
	z-index: 999;
`;

const SearchInput = styled.input`
  color: #ABABAB;
	border:0;
	margin-left:12px;
	padding:0;
  background: #F7F7F7;
`;

const SearchContainer = styled.div`
  width:263px;
	height:36px;
	border: 1px solid #C7C7C7;
  border-radius: 8px;
	line-height: 36px;
  background: #F7F7F7;
`;

const SearchIcon = styled.img`
	margin-left:24px;
	
`;

const Icon = styled.img `
	width:22px;
	height:22px;
`;

const IconContainer = styled.div `
	width:252px;
	height: 22px;
	display:flex;
	justify-content: space-between;
	margin-right:40px;
`;

export default function Header() {
	return <>
		<HeaderContainer>
			<Logo src={logo}/>
			<SearchContainer>
				<SearchIcon src={searchIcon}/>
				<SearchInput placeholder="검색">
				</SearchInput>
			</SearchContainer>
			<IconContainer>
				<Icon src={mainBtn}/>
				<Icon src={Union}/>
				<Icon src={plus}/>
				<Icon src={compass}/>
				<Icon src={Heart}/>
				<Icon src={profile}/>
			</IconContainer>

		</HeaderContainer>
	</>
};