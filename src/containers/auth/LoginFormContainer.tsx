import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import AuthBlock from "../../components/auth/AuthBlock";
import AuthButton from "../../components/auth/AuthButton";
import AuthForm from "../../components/auth/AuthForm";
import AuthHr from "../../components/auth/AuthHr";
import AuthImg from "../../components/auth/AuthImg";
import AuthInput from "../../components/auth/AuthInput";
import apiClient from "../../lib/apiClient";

interface LoginFormContainerProps {}

const StyledLink = styled(Link)`
	color: #8f8f8f;
	font-size: 18px;
	text-decoration: none;

	width: 304px;
	height: 56px;

	display: flex;
	align-items: center;
	justify-content: center;

	margin-bottom: 36px;
`;

const LoginFormContainer: React.FC<LoginFormContainerProps> = ({ children }) => {
	const navigate = useNavigate();
	const [isActive, setActive] = useState(false);

	const [form, setForm] = useState({
		id: "",
		password: "",
	});

	useEffect(() => {
		if (form.id.length > 0 && form.password.length > 0) {
			setActive(true);
		} else {
			setActive(false);
		}
	}, [form]);

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;

		setForm({
			...form,
			[name]: value,
		});
	};

	const onSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		if (isActive) {
			console.log(form);
			apiClient
				.post("/auth/login", {
					email: form.id,
					password: form.password,
				})
				.then((res) => {
					console.log(res);
					// navigate("/home");
				})
				.catch((err) => console.error(err));
		} else {
			console.log("NO AUTH");
		}
	};

	return (
		<AuthBlock>
			<AuthImg />
			<AuthForm onSubmit={onSubmit}>
				<AuthInput type="id" name="id" placeholder="전화번호, 사용자 이름 또는 이메일" onChange={onChange} />
				<AuthInput type="password" name="password" placeholder="비밀번호" onChange={onChange} />
				<AuthButton isActive={isActive}>로그인</AuthButton>
				<AuthHr />
				<StyledLink to="/">비밀번호를 잊으셨나요?</StyledLink>
			</AuthForm>
		</AuthBlock>
	);
};
export default LoginFormContainer;
