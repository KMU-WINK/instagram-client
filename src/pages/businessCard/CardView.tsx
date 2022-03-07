import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from 'axios';
import {Buffer} from 'buffer';
import ModalHeader from "../../components/businessCard/ModalHeader";
import CardMain from "../../components/businessCard/CardMain";
import CardFront from "../../components/businessCard/CardFront";
import CardBack from "../../components/businessCard/CardBack";
// @ts-ignore
import CardWallet from "../../img/CardWallet.svg";
// @ts-ignore
import BusinessCardExaple from "../../img/BusinessCardExaple.png"
import { useNavigate } from "react-router-dom";

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
	justify-content:center;
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
	const [image, setImage] = useState(null);
	const navigate = useNavigate();


	
	return (
		<>
			<CardViewModal>
				<ModalHeader headerTitle={"프로필 카드"} />
				<ModalBody>
					<CardMain 
						style={{background:"white", padding:"0", width:"auto", height:"auto", marginTop:"-20px"}}
					>
						
						<img src={"http://localhost:3000/businessCard/1"} />

					</CardMain>
				</ModalBody>
				
				<Btton backgroundColor={"#C6C6C6"} left={"486px"}>수정하기</Btton>
				<Btton backgroundColor={"#3796f0"} left={"606px"}>저장하기</Btton>
				<img onClick={() => navigate("/businesscard/wallet")}  src={CardWallet} style={{position:"absolute", left:"726px", top:"720px", cursor:"pointer"}}></img>
			</CardViewModal>
		</>
	);
}
