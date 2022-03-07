import React from "react";
import styled from "styled-components";
import CategoryBox from "../CategoryBox";
import AddCategoryBox from "../AddCategoryBox";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
	width: 100%;
	padding-left: 20px;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-column-gap: 38px;
`;

export default function EditBodySection() {
	const navigate = useNavigate();

	const handleOnClick = (e: any) => {
		navigate("/setting/category/addcategory");
	};

	return (
		<>
			<Container>
				<CategoryBox width={215} height={251} state={false} />
				<CategoryBox width={215} height={251} state={false} />
				<CategoryBox width={215} height={251} state={false} />
				<CategoryBox width={215} height={251} state={false} />
				<AddCategoryBox width={215} height={251} onClick={handleOnClick} />
			</Container>
		</>
	);
}
