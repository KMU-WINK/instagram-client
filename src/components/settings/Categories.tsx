import React, { useState } from "react";
import styled from "styled-components";
import Category from "./Category";

const menuArr = [
	"프로필 편집",
	"피드 편집",
	"비밀번호 변경",
	"앱 및 웹사이트",
	"이메일 및 SMS",
	"푸시 알림",
	"연락처 관리",
	"개인정보 및 보안",
	"로그인 활동",
];

const CategoriesContainer = styled.ul`
	list-style: none;
	margin: 0;
	padding: 0;
	border: 0;
	vertical-align: baseline;
	width: 100%;
`;

export default function Categories({ getMenu }: { getMenu: any }) {
	const onClickMenu = (index: number) => {
		getMenu(index);
	};

	return (
		<>
			<CategoriesContainer>
				{menuArr.map((item, index) =>
					index !== 9 ? (
						<Category onClickMenu={onClickMenu} children={""} color={"#00000"} id={item} index={index} />
					) : (
						<Category
							onClickMenu={onClickMenu}
							children={""}
							color={"#3796F0"}
							id="프로페셔널 계정으로 전환"
							index={index}
						/>
					)
				)}
			</CategoriesContainer>
		</>
	);
}
