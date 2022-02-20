import React from "react";
import AuthTemplate from "../../components/auth/AuthTemplate";
import AuthHelpContainer from "../../containers/auth/AuthHelpContainer";
import LoginFormContainer from "../../containers/auth/LoginFormContainer";

const LoginPage: React.FC = ({ children }) => {
	return (
		<AuthTemplate>
			<LoginFormContainer />
			<AuthHelpContainer />
		</AuthTemplate>
	);
};
export default LoginPage;
