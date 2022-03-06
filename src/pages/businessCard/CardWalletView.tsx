import React, { useState } from "react";
import styled from "styled-components";
import ModalHeader from "../../components/businessCard/ModalHeader";
import CardMain from "../../components/businessCard/CardMain";
import CardFront from "../../components/businessCard/CardFront";
import CardBack from "../../components/businessCard/CardBack";
// @ts-ignore
import CardWallet from "../../img/CardWallet.svg";
import SubCardContainer from "../../components/businessCard/SubCards/SubCardsContainer"

interface ButtonProps{
	backgroundColor:string;
	left:string;
}

const CardViewModal = styled.div`
	position: fixed;
	top: 40px;
	left: 363px;
	width: 1250px;
	height: 800px;
	border-radius: 16px;
	border: 1px solid beige;
`;

const ModalBody = styled.div`
	display: flex;
	justify-content:flex-start;
	margin-left:186px;
	align-items:center;
	width: 1250px;
	height: 740px;
`;

const Btton = styled.div<ButtonProps>`
	display:flex;
	justify-content:center;
	align-items:center;
	position: absolute;
	padding-top:3px;
	width: 100px;
	height: 40px;
	left: ${(props) => props.left};
	top: 720px;
	color:white;
	background: ${(props) => props.backgroundColor};
	border-radius: 41px;
	cursor:pointer;
`;
export default function CardView() {
	const [state, setState] = useState("");


	return (
		<>
			<CardViewModal>
				<ModalHeader headerTitle={"명함 지갑"} />
				<ModalBody>
					<CardMain 
						style={{display:"flex",background:"white", padding:"0", width:"auto", height:"auto", marginTop:"-20px"}}
					>
						<CardFront color={state} alignValue={"left"}/>
						<SubCardContainer />
					</CardMain>
				</ModalBody>
				<Btton backgroundColor={"#3796f0"} left={"567px"}>명함 만들기</Btton>
			</CardViewModal>
		</>
	);
}
