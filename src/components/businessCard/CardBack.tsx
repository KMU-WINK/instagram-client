import React, { useState } from "react";
import styled from "styled-components";
// @ts-ignore
import QRcode from "../../img/QRcode.png";
import CardContainer from "./CardContainer";
import CardBorder from "./CardBorder";

interface CardBackProps {
	color: string;
}

const Container = styled.div`
	display: inline-block;
	width: 295px;
	height: 518px;
	padding: 12px;
	margin: 20px;
	background-color: #f2e8e8;
	// background-color: ${(props) => props.color ? props.color : "#f2e8e8"};
	text-align: center;
	vertical-align: middle;
`;

const Border = styled.div`
	width: 286px;
	height: 505px;
	border: 5px double rgb(0, 0, 0, 0.2);
	border-radius: 5px;
`;

const QR = styled.img`
	position: relative;
	left: 56px;
	top: 128px;
	width: 176px;
	height: 176px;
	display: block;
`;

const Name = styled.div`
	position: relative;
	top: 130px;
	font-weight: bold;
	font-size: 28px;
	color: #000000;
`;

const TagsContainer = styled.div`
	position: relative;
	top: 140px;
`;

const Tag = styled.span`
  font-size: 10px;
`;

export default function CardBack(props:CardBackProps) {
	const name = "_2soh";
	const tags = ["예술가", "일러스터", "코스메틱", "여성"];

	return (
		<>
			<CardContainer color={props.color}>
				<CardBorder>
					<QR src={QRcode}/>
					<Name>{name}</Name>
					<TagsContainer>
						{tags.map((item) => (<Tag>{" #"+item}</Tag>))}
					</TagsContainer>
				</CardBorder>
			</CardContainer>
		</>
	);
}
