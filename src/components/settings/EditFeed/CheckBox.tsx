import React from "react";
import styled, { keyframes } from "styled-components";
interface CheckBoxProps {
	value: any;
	checked: boolean;
	onChange: (e: any) => void;
	name?: any;
	id?: any;
	label: string;
	disabled: boolean;
}
const Input = styled.input`
	height: 0;
	width: 0;
	opacity: 0;
	z-index: -1;
`;

const Label = styled.label<{ disabled: boolean }>`
	position: relative;
	display: inline-block;
	cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
	margin: 0.6em 30px;
`;

const rotate = keyframes`
 from {
    opacity: 0;
    transform: rotate(0deg);
  }
  to {
    opacity: 1;
    transform: rotate(45deg);
  }
`;

const Indicator = styled.div`
	width: 22px;
	height: 22px;
	background: #ffffff;
	position: absolute;
	top: 0em;
	left: -1.9em;
	border: 1px solid #858585;
	border-radius: 0.2em;

	${Input}:not(:disabled):checked & {
		background: #ffffff;
	}

	${Label}:hover & {
		background: #ccc;
	}

	&::after {
		content: "";
		position: absolute;
		display: none;
	}

	${Input}:checked + &::after {
		display: block;
		top: 0.1em;
		left: 0.35em;
		width: 35%;
		height: 70%;
		border: solid #000000;
		border-width: 0 0.2em 0.2em 0;
		animation-name: ${rotate};
		animation-duration: 0.3s;
		animation-fill-mode: forwards;
	}

	&:disabled {
		cursor: not-allowed;
	}
`;

export default function CheckBox(props: CheckBoxProps) {
	return (
		<Label htmlFor={props.id} disabled={props.disabled}>
			{props.label}
			<Input
				id={props.id}
				type="checkbox"
				name={props.name}
				value={props.value}
				disabled={props.disabled}
				checked={props.checked}
				onChange={props.onChange}
			/>
			<Indicator />
		</Label>
	);
}
