import React from "react";
import styled from "styled-components";

interface AuthTemplateProps {}

const AuthTemplateBlock = styled.div`
	background-color: #fafafa;

	width: 100vw;
	height: 100vh;

	display: flex;
	align-items: center;
	justify-content: center;

	flex-direction: column;
`;

const Block = styled.div`
	background-color: white;

	border: 1px solid #8f8f8f;

	width: 525px;
`;

const AuthTemplate: React.FC<AuthTemplateProps> = ({ children }) => {
	return <AuthTemplateBlock>{children}</AuthTemplateBlock>;
};

export default AuthTemplate;
