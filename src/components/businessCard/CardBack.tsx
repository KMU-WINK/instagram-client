import React, { useEffect, useState } from "react";
import styled from "styled-components";
// @ts-ignore
import QRcode from "../../img/QRcode.png";
import CardContainer from "./CardContainer";
import CardBorder from "./CardBorder";

import QRCode from "qrcode.react";

interface CardBackProps {
	color: string;
}

const isAlpha = function (ch: string) {
	return /^[A-Z]$/i.test(ch);
};

const QRArea = styled.div`
	position: relative;
	left: 56px;
	top: 128px;
	width: 176px;
	height: 176px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const QR = styled(QRCode)`
	width: 176px;
	height: 176px;
`;

const Name = styled.div`
	position: relative;
	top: 130px;
	font-weight: bold;
	font-size: 28px;
`;

const TagsContainer = styled.div`
	position: relative;
	top: 140px;
`;

const Tag = styled.span`
	font-size: 10px;
`;

export default function CardBack(props: CardBackProps) {
	const name = "_2soh";
	const tags = ["예술가", "일러스터", "코스메틱", "여성"];

	return (
		<>
			<CardContainer color={props.color}>
				<CardBorder>
					<QRArea>
						<QR
							value="http://facebook.github.io/react/"
							bgColor={"transparent"}
							fgColor={isAlpha(props.color[1]) ? "#000000" : "#FFFFFF"}
						/>
					</QRArea>
					<Name>{name}</Name>
					<TagsContainer>
						{tags.map((item) => (
							<Tag>{" #" + item}</Tag>
						))}
					</TagsContainer>
				</CardBorder>
			</CardContainer>
		</>
	);
}
