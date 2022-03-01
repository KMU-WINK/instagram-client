import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AuthBlock from "../../components/auth/AuthBlock";
import AuthButton from "../../components/auth/AuthButton";
import AuthForm from "../../components/auth/AuthForm";
import AuthImg from "../../components/auth/AuthImg";
import AuthInput from "../../components/auth/AuthInput";

interface RegisterFormContainerProps {}

const RegisterFormContainerBlock = styled.div``;

const RegisterFormContainer: React.FC<RegisterFormContainerProps> = ({ children }) => {
	const [isActive, setActive] = useState(false);

	const [form, setForm] = useState({
		id: "",
		name: "",
		username: "",
		password: "",
	});

	useEffect(() => {
		if (form.id.length > 0 && form.password.length > 0 && form.name.length > 0 && form.username.length > 0) {
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
			axios
				.post("/api/auth/signup", {
					email: form.id,
					userName: form.name,
					nickName: form.username,
					password: form.password,
				})
				.then((res) => console.log(res));
		} else {
			console.log("NO AUTH");
		}
	};

	return (
		<AuthBlock>
			<AuthImg />
			<AuthForm onSubmit={onSubmit}>
				<AuthInput name="id" placeholder="전화번호, 사용자 이름 또는 이메일" onChange={onChange} />
				<AuthInput name="name" placeholder="성명" onChange={onChange} />
				<AuthInput name="username" placeholder="사용자 이름" onChange={onChange} />
				<AuthInput name="password" type="password" placeholder="비밀번호" onChange={onChange} />
				<AuthButton mb={36} isActive={isActive}>
					가입
				</AuthButton>
			</AuthForm>
		</AuthBlock>
	);
};
export default RegisterFormContainer;
