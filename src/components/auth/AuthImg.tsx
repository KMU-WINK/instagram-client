import React from "react";
import styled from "styled-components";

// @ts-ignore
import logo from "../../img/logo.svg";

interface AuthImgProps {}

const AuthImgBlock = styled.div`
	width: 100%;
	height: 75px;

	display: flex;
	align-items: center;
	justify-content: center;

	margin-top: 40px;
	margin-bottom: 55px;
`;

const AuthImg: React.FC<AuthImgProps> = () => {
	return (
		<AuthImgBlock>
			<img src={logo} />
		</AuthImgBlock>
	);
};

export default AuthImg;
