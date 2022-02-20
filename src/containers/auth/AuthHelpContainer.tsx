import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import AuthBlock from "../../components/auth/AuthBlock";

interface AuthHelpContainerProps {}

const AuthHelpContainerBlock = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 31.5px 131px;

	.text {
		font-weight: 500;
		font-size: 21px;
		color: #595959;

		margin-right: 15px;
	}
`;

const StyledLink = styled(Link)`
	font-weight: bold;
	font-size: 21px;
	color: #3796f0;
	text-decoration: none;

	cursor: pointer;

	&:hover,
	&:active {
		text-decoration: none;
		color: #3796f0;
	}
`;

const AuthHelpContainer: React.FC<AuthHelpContainerProps> = ({ children }) => {
	const { pathname } = useLocation();

	return (
		<AuthBlock>
			<AuthHelpContainerBlock>
				<div className="text">{pathname === "/" ? "계정이 없으신가요?" : "계정이 있으신가요?"}</div>
				<div className="link">
					<StyledLink to={pathname === "/" ? "/register" : "/"}>
						{pathname === "/" ? "가입하기" : "로그인"}
					</StyledLink>
				</div>
			</AuthHelpContainerBlock>
		</AuthBlock>
	);
};
export default AuthHelpContainer;
