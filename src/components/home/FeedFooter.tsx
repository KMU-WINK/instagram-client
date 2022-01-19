import styled from "styled-components";
import React, { useState } from "react";
// @ts-ignore
import Heart_off from '../../img/Heart_off.png';
// @ts-ignore
import Heart_on from '../../img/Heart_on.png';
// @ts-ignore
import comment from '../../img/Comment.png';
// @ts-ignore
import Share from '../../img/Union.png';
// @ts-ignore
import Smile from '../../img/smile.png';
import { Font3_Light, FontBold, FontNormal } from "../style/Font";
import Comment from "./Comment";

const FooterContainer = styled.div`
  border: 1px solid #E0E0E0;
	padding: 20px;
`;

const FooterIcons = styled.div`
	display:flex;
	justify-content: space-between;
	width:93px;
	margin-bottom:20px;
`;

const FooterIcon = styled.img`
	width:22px;
	height: 21px;
`;

const ViewAll = styled(Font3_Light)`
	margin-top:9px;
`;

const PostTime = styled(Font3_Light)`
	font-size: 10px;
	margin:16px 0 8px 0;
`;

const CommentContainer = styled.div`
	display:flex;
	border:1px solid #DCDBDB;
	border-top:0;
	padding: 19px;
`;

const CommentInput = styled.input`
	border:0;
  margin-left: 19px;
`;

export default function FeedFooter() {

	const [heart,setHeart] = useState(false);

	const heartClick = () => {
		if(heart) setHeart(false);
		else setHeart(true);
	}

	return <>
		<FooterContainer>
			<FooterIcons>
				<FooterIcon src={heart ? Heart_on : Heart_off} onClick={heartClick}/>
				<img src={comment} width='21px' height='21px'/>
				<FooterIcon src={Share}/>
			</FooterIcons>
			<FontNormal>여러 명이 좋아합니다</FontNormal>
			<Comment
				id="insta_123"
				content="test"/>
			<ViewAll>댓글 5개 모두 보기</ViewAll>
			<Comment
				id="insta_111"
				content="hi"/>
			<Comment
				id="insta_222"
				content="hello"/>
			<PostTime>10시간전</PostTime>
		</FooterContainer>
		<CommentContainer>
			<img src={Smile}/>
			<CommentInput placeholder='댓글 달기...'/>
		</CommentContainer>
	</>
}