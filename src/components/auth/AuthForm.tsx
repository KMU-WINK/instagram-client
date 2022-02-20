import React from "react";
import styled from "styled-components";

interface AuthFormProps {
	onSubmit: (e: React.FormEvent) => void;
}

const AuthFormBlock = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const AuthForm: React.FC<AuthFormProps> = ({ onSubmit, children }) => {
	return <AuthFormBlock onSubmit={onSubmit}>{children}</AuthFormBlock>;
};
export default AuthForm;
