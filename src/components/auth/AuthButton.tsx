import React from "react";
import styled from "styled-components";

interface AuthButtonProps {
	isActive: boolean;

	mb?: number;
}

const AuthButtonBlock = styled.button<AuthButtonProps>`
	margin-top: 16px;
	width: 401px;
	height: 56px;

	text-align: center;

	background: #3796f0;
	opacity: ${(props) => (props.isActive ? 1 : 0.3)};

	border-radius: 4px;

	color: white;
	font-weight: bold;
	font-size: 21px;

	outline: none;
	border: none;

	cursor: pointer;

	margin-bottom: ${(props) => `${props.mb}px`};
`;

const AuthButton: React.FC<AuthButtonProps> = ({ isActive = false, mb = 16, children }) => {
	return (
		<AuthButtonBlock isActive={isActive} mb={mb} type="submit">
			{children}
		</AuthButtonBlock>
	);
};
export default AuthButton;
