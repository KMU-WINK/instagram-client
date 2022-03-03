import React from "react";
import styled from "styled-components";
// @ts-ignore
import TestImg from "../../../img/CateTestImg.png";

interface CategoryBoxProps {
	state: boolean;
	width: number;
	height: number;
}

const CategoryBoxContainer = styled.div<{width: number, height: number}>`
	width: ${(props) => props.width}px;
	height: ${(props) => props.height}px;
	text-align: center;
	margin-right: 20px;
	margin-bottom: 40px;
`;

const CategoryLabel = styled.label`
	display: inline-block;
	height: 10%;
	font-size: 14px;
	margin-bottom: 9px;
`;

const Box = styled.div`
	width: 100%;
	height: 90%;
	border-radius: 8px;
	background-color: #f2f2f2;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-column-gap: 6px;
	grid-row-gap: 6px;
	place-items: center;
	padding: 10px;
`;

const CategoryImg = styled.img`
	width: 100%;
	height: 100%;
`;

const DeleteBtn = styled.button<{ state: boolean }>`
	color: #3796f0;
	font-size: 14px;
	line-height: 16px;
	background-color: #ffffff;
	border: 0;
	visibility: ${(props) => (props.state ? "visible" : "hidden")};
`;

export default function CategoryBox(props: CategoryBoxProps) {
	const handleDeleteBtn = (e: any) => {
		alert("지운다");
	};

	return (
		<>
			<CategoryBoxContainer width={props.width} height={props.height}>
				<CategoryLabel>제목</CategoryLabel>
				<Box>
					<CategoryImg src={TestImg} />
					<CategoryImg src={TestImg} />
					<CategoryImg src={TestImg} />
					<CategoryImg src={TestImg} />
				</Box>
				<DeleteBtn state={props.state} onClick={handleDeleteBtn}>
					삭제
				</DeleteBtn>
			</CategoryBoxContainer>
		</>
	);
}
