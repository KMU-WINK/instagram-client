import React from "react";
import styled from "styled-components";

interface AuthHrProps {}

const AuthHrBlock = styled.div`
	width: 401px;
	height: 56px;

	display: flex;

	justify-content: space-between;

	.line {
		width: 149px;
		height: 28px;

		border-bottom: 1px solid #8f8f8f;
	}

	.text {
		display: flex;
		align-items: center;
		justify-content: center;

		font-weight: 500;
		font-size: 21px;

		color: #595959;
	}
`;

const AuthHr: React.FC<AuthHrProps> = ({ children }) => {
	return (
		<AuthHrBlock>
			<div className="line" />
			<div className="text">또는</div>
			<div className="line" />
		</AuthHrBlock>
	);
};
export default AuthHr;
