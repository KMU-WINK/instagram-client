import React from "react";
import styled from "styled-components";
// @ts-ignore
import Add from "../../../img/AddBtn.png";

const CategoryBoxContainer = styled.div`
  width: 170px;
  height: 200px;
  text-align: center;
  margin-right: 20px;
  margin-bottom: 40px;
`;

const CategoryLabel = styled.label`
  font-size: 14px;
  margin-bottom: 9px;
`;

const Box = styled.div`
  width: 100%;
  height: 170px;
  border-radius: 8px;
  border: 2px #E0E0E0 solid;
	text-align: center;
`;

const AddBtn = styled.img`
	width: 68px;
	height: 68px;
	margin-top: 28%;
`;


export default function AddCategoryBox() {
	return (
		<>
			<CategoryBoxContainer>
				<CategoryLabel>추가하기</CategoryLabel>
				<Box>
					<AddBtn src={Add} />
				</Box>
			</CategoryBoxContainer>
		</>
	);
}