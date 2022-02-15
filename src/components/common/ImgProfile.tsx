import styled from "styled-components";
import React from 'react';
// @ts-ignore
import border from "../../img/profileBorder.svg";
// @ts-ignore
import testImg from "../../img/sea.jpg";

interface imgProfileProps {
	margin: number;
	width: number;
	height: number;
}

const ImgProfileContainer = styled.div `
	
`;

const Border = styled.img<imgProfileProps>`
	position: absolute;
	width: ${props => props.width || 40}px;
	height: ${props => props.height || 40}px;
  border-radius: 100%;
`;

const Img = styled.img<imgProfileProps>`
	overflow: hidden;
	margin-top: ${props => props.margin}px;
	margin-left: ${props => props.margin}px;
  width: ${props => `calc(${props.width} - ${props.margin} * 2)`}px;
  height: ${props => `calc(${props.height} - ${props.margin} * 2)`}px;
  border-radius: 100%;
	
`;

export default function ImgProfile(props : imgProfileProps) {
	return <>
		<ImgProfileContainer>
			<Border src={border} width={props.width} height={props.height} margin={props.margin}/>
			<Img src={testImg} width={props.width} height={props.height} margin={props.margin}/>
		</ImgProfileContainer>

	</>
};