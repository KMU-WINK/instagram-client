import styled from "styled-components";
import React, { useState } from "react";
// @ts-ignore
import categoryArrow from "../../img/categoryArrow.svg";
// @ts-ignore
import more from "../../img/more.svg";
import { Font1_16px_Bold } from "../style/Font";

interface ArrowProps {
	open: boolean;
}

interface CategoryMainProps {
	open: boolean;
}

interface CategoryButtonProps {
	clicked: boolean;
}

interface DropMenuProps {
	open: boolean;
}

const CategoryHeader = styled.div`
	display: flex;
	gap: 7px;
	margin-bottom: 20px;
`;

const Arrow = styled.img<ArrowProps>`
	transform: ${(props) => (props.open ? "rotate( 180deg )" : "none")};
`;

const MoreContainer = styled.div`
	margin-left: auto;
	width: 300px;
`;

const More = styled.img`
	float: right;
`;

const DropMenu = styled.div<DropMenuProps>`
	display: ${(props) => (props.open ? "block" : "none")};
	border: 1px solid #8f8f8f;
	border-radius: 8px;
	position: absolute;
	z-index: 2;
	margin-top: 20px;
	width: 300px;
	background-color: #fff;
`;

const DropItem = styled.div`
	height: 54px;
	text-align: center;
	line-height: 54px;
	border-bottom: 1px solid #8f8f8f;
`;

const CategoryMain = styled.div<CategoryMainProps>`
	display: ${(props) => (props.open ? "flex" : "none")};
	gap: 16px;
	margin-bottom: 34px;
`;

const CategoryButton = styled.div<CategoryButtonProps>`
	width: 104px;
	height: 39px;
	line-height: 39px;
	border: 1px solid;
	border-radius: 4px;
	text-align: center;
	border-color: ${(props) => (props.clicked ? "#000" : "#8F8F8F")};
	font-size: 16px;
	color: ${(props) => (props.clicked ? "#000" : "#8F8F8F")};
`;

export default function RightCategory() {
	const categorys = ["카테고리", "카테고리", "카테고리"];
	const [categoryOpen, setCategoryOpen] = useState(true);
	const [moreOpen, setMoreOpen] = useState(false);

	const IsCategoryOpen = () => {
		if (categoryOpen) setCategoryOpen(false);
		else setCategoryOpen(true);
	};

	const IsMoreOpen = () => {
		if (moreOpen) setMoreOpen(false);
		else setMoreOpen(true);
	};

	return (
		<>
			<CategoryHeader>
				<Font1_16px_Bold>카테고리</Font1_16px_Bold>
				<Arrow src={categoryArrow} onClick={IsCategoryOpen} open={categoryOpen} />
				<MoreContainer>
					<More src={more} onClick={IsMoreOpen} />
					<DropMenu open={moreOpen}>
						<DropItem>피드 순서 편집</DropItem>
						<DropItem>카테고리 설정</DropItem>
						<DropItem>취소</DropItem>
					</DropMenu>
				</MoreContainer>
			</CategoryHeader>
			<CategoryMain open={categoryOpen}>
				{categorys.map((category) => (
					<CategoryButton clicked={false}>{"# " + category}</CategoryButton>
				))}
			</CategoryMain>
		</>
	);
}
