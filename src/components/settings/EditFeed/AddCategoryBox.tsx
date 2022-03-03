import React from "react";
import styled from "styled-components";
// @ts-ignore
import Add from "../../../img/AddBtn.png";

const CategoryBoxContainer = styled.div<{width: number, height: number}>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  text-align: center;
  margin-right: 20px;
  margin-bottom: 40px;
`;

const CategoryLabel = styled.label`
	display: inline-block;
  font-size: 14px;
  margin-bottom: 9px;
	height: 10%;
`;

const Box = styled.div`
  width: 100%;
  height: 90%;
  border-radius: 8px;
  border: 2px #E0E0E0 solid;
	text-align: center;
`;

const AddBtn = styled.img`
	width: 68px;
	height: 68px;
	margin-top: 34%;
`;


export default function AddCategoryBox({onClick, width, height}:{onClick: any, width: number, height: number}) {
	return (
		<>
			<CategoryBoxContainer width={width} height={height}>
				<CategoryLabel>추가하기</CategoryLabel>
				<Box>
					<AddBtn onClick={onClick} src={Add} />
				</Box>
			</CategoryBoxContainer>
		</>
	);
}