import styled from "styled-components";
import React from "react";
// @ts-ignore
import logo from "../../img/logo.png";
// @ts-ignore
import searchIcon from "../../img/Search.png";
// @ts-ignore
import mainBtn from "../../img/mainBtn.png";
// @ts-ignore
import Union from "../../img/Union.png";
// @ts-ignore
import plus from "../../img/plus.png";
// @ts-ignore
import compass from "../../img/compass.png";
// @ts-ignore
import Heart from "../../img/Heart_off.svg";
// @ts-ignore
import profile from "../../img/profile.svg";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
	profileImg?:string;
	userId?:number;
};

const Logo = styled.img`
	width: 104px;
	height: 30px;
	margin-left: 26px;
	cursor: pointer;
`;

const HeaderContainer = styled.div`
	position: fixed;
	width: 100%;
	height: 67px;
	background-color: #fff;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
	display: flex;
	justify-content: space-between;
	align-items: center;
	top: 0;
	z-index: 99;
`;

const SearchInput = styled.input`
	color: #ababab;
	border: 0;
	margin-left: 12px;
	padding: 0;
	background: #f7f7f7;
`;

const SearchContainer = styled.div`
	width: 263px;
	height: 36px;
	border: 1px solid #c7c7c7;
	border-radius: 8px;
	line-height: 36px;
	background: #f7f7f7;
`;

const SearchIcon = styled.img`
	margin-left: 24px;
`;

const Icon = styled.img``;

const MyProfile = styled.img`
  border-radius: 100%;
	width: 22px;
	height: 22px;
`;

const IconContainer = styled.div`
	width: 252px;
	height: 22px;
	display: flex;
	justify-content: space-between;
	margin-right: 40px;
`;

export default function Header(props : HeaderProps) {
	const navigate = useNavigate();
	return (
		<>
			<HeaderContainer>
				<Logo src={logo} onClick={() => navigate("/home")} />
				<SearchContainer>
					<SearchIcon src={searchIcon} />
					<SearchInput placeholder="검색"></SearchInput>
				</SearchContainer>
				<IconContainer>
					<Icon src={mainBtn} />
					<Icon src={Union} />
					<Icon src={plus} />
					<Icon src={compass} />
					<Icon src={Heart} />
					<MyProfile style={{ cursor: "pointer" }} src={props.profileImg ? props.profileImg : profile} onClick={() => navigate(`/feed/${props.userId}`)} />
				</IconContainer>
			</HeaderContainer>
		</>
	);
}
