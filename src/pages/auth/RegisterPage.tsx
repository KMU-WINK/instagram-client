import React from "react";
import RegisterFormContainer from "../../containers/auth/RegisterFormContainer";
import AuthTemplate from "../../components/auth/AuthTemplate";
import AuthHelpContainer from "../../containers/auth/AuthHelpContainer";

const RegisterPage: React.FC = () => {
	return (
		<AuthTemplate>
			<RegisterFormContainer />
			<AuthHelpContainer />
		</AuthTemplate>
	);
};
export default RegisterPage;
