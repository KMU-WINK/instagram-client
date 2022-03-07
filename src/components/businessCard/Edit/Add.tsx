import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
	width: 124px;
	height: 126px;
`;

const Content = styled.div`
	width: 100%;
	height: 100%;
	background-color: #dbdbdb;
	border-radius: 8px;
`;

export default function Add() {
	return (
		<>
			<Container>
				<Content />
			</Container>
		</>
	);
}
