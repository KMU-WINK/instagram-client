import React, { useState } from "react";
import styled from "styled-components";
import Container from "./Container";
import Title from "./Title";
// @ts-ignore
import TestImg from "../../../img/CateTestImg.png";
import CategoryBox from "./CategoryBox";
import AddCategoryBox from "./AddCategoryBox";
import { useNavigate } from "react-router-dom";

const InnerContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	margin-top: 35px;
	width: 775px;
`;

const DetailInfo = styled.div`
	margin-top: 15px;
	color: #6f6f6f;
	font-size: 16px;
	line-height: 28px;
`;

const EditBtn = styled.button<{ state: boolean }>`
	margin-left: 645px;
	color: #0095f6;
	font-size: 16px;
	line-height: 28px;
	background-color: #ffffff;
	border: none;
`;

export default function CategorySettingBox() {
	const navigate = useNavigate();
	const [editMode, setEditMode] = useState(false);
	const handleOnClick = (e: any) => {
		setEditMode(!editMode);
	}

	const handleCategoryEdit = (e: any) => {
		navigate("/setting/category/editcategory")
	}

	return (
		<>
			<Container topMargin={55} height={620}>
				<Title content="카테고리 설정" />
				<EditBtn onClick={handleOnClick} state={editMode}>
					{editMode ? "완료" : "편집"}
				</EditBtn>
				<DetailInfo>카테고리 설정을 통해 다른 사용자에게 정돈된 게시물을 보여줄 수 있습니다.</DetailInfo>
				<InnerContainer>
					<CategoryBox width={170} height={200} state={editMode}/>
					<CategoryBox width={170} height={200} state={editMode}/>
					<CategoryBox width={170} height={200} state={editMode}/>
					<CategoryBox width={170} height={200} state={editMode}/>
					<CategoryBox width={170} height={200} state={editMode}/>
					<CategoryBox width={170} height={200} state={editMode}/>
					<AddCategoryBox width={170} height={200} onClick={handleCategoryEdit}/>
				</InnerContainer>
			</Container>
		</>
	);
}
