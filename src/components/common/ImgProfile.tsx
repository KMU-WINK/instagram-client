import styled from "styled-components";
import React from "react";
// @ts-ignore
import border from "../../img/storyBorder.svg";
// @ts-ignore
import noProfileImg from "../../img/profile.svg";
import { useNavigate } from "react-router-dom";

interface imgProfileProps {
	margin: number;
	width: number;
	height: number;
	url: string;
	img?: string;
}

const ImgProfileContainer = styled.div``;

export default function ImgProfile(props: imgProfileProps) {
	const navigate = useNavigate();

	const Border = styled.img`
		position: absolute;
		width: ${props.width}px;
		height: ${props.height}px;
		border-radius: 100%;
	`;

	const Img = styled.img`
		overflow: hidden;
		margin-top: ${props.margin}px;
		margin-left: ${props.margin}px;
		width: ${props.width - props.margin * 2}px;
		height: ${props.height - props.margin * 2}px;
		border-radius: 100%;
	`;

	return (
		<>
			<ImgProfileContainer
				onClick={() => {
					navigate(props.url);
				}}
			>
				<Border src={border} />
				<Img src={props.img === "https://update.com" ? noProfileImg : props.img} />
			</ImgProfileContainer>
		</>
	);
}
