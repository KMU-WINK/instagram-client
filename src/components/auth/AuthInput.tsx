import React from "react";
import styled from "styled-components";

const AuthInput = styled.input`
	width: 401px;
	height: 56px;

	background: #ffffff;

	border: 1px solid #8f8f8f;
	border-radius: 4px;

	padding-left: 12px;

	font-size: 18px;

	& + & {
		margin-top: 8px;
	}
`;

export default AuthInput;
