import React from "react";
import styled from "styled-components";

interface AuthBlockProps {}

const AuthBlockBlock = styled.div`
	background-color: white;

	border: 1px solid #8f8f8f;

	width: 525px;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	& + & {
		margin-top: 40px;
	}
`;

const AuthBlock: React.FC<AuthBlockProps> = ({ children }) => {
	return <AuthBlockBlock>{children}</AuthBlockBlock>;
};
export default AuthBlock;
