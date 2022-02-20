import React from "react";
import styled from "styled-components";
// @ts-ignore
import Meta from "../../img/meta.png";

const Container = styled.div`
	width: 280px;
	height: 237px;
	margin-top: 40px;
	margin-left: 41px;
`;

const MetaImg = styled.img`
	margin-bottom: 11px;
	width: 100px;
	height: 20px;
	display: block;
`;

const AccountCenterLink = styled.div`
	font-weight: bold;
	font-size: 18px;
	color: #3796f0;
	margin-bottom: 11px;
`;

const DetailInfo = styled.div`
	width: 226px;
	color: #8d8d8d;
	font-size: 16px;
`;

export default function NavigationBarBottom() {
	return (
		<>
			<Container>
				<MetaImg src={Meta} />
				<AccountCenterLink>계정 센터</AccountCenterLink>
				<DetailInfo>
					스토리 및 게시물 공유, 로그인 등 Instagram, Facebook 앱, Messenger 간에 연결된 환경에 대한 설정을
					관리하세요.
				</DetailInfo>
			</Container>
		</>
	);
}
