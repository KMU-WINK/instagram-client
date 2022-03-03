import React from "react";
import styled from "styled-components";

const EditCardContaienr = styled.div`
	width: 360px;
	height: 100%;
	margin-right: 20px;
	margin-left: 20px;
	overflow-y: scroll;
	overflow-x: hidden;
	-ms-overflow-style: none;
	&::-webkit-scrollbar {
		display: none;
	}
`;
export default function EditCard() {
	return (
		<>
			<EditCardContaienr></EditCardContaienr>
		</>
	);
}
