import styled from "styled-components";
import React, {useState, useEffect} from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

// @ts-ignore
import StoryExample_1 from "../../img/StoryExample_1.png";
// @ts-ignore
import PlayImg from "../../img/PlayImg.png"
// @ts-ignore
import Mute from "../../img/Mute.png"
// @ts-ignore
import More_ from "../../img/More_.png"


interface DetailProps {
	isFocus: boolean;
}

const Card = styled.div`
    position:relative;
    padding:0;
    width:329px;
    height:584px;
    z-index:100;
    margin:200px 0px 200px 0px;
    text-align:center;
    border-radius:8px;
    background-image:url(${StoryExample_1});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
`;
const HighlightBar = styled.hr`
    display:inline-block;
    margin-top:22px;
    position:relative;
    width:300px;
    border-radius:8px;
    border: 2px solid rgba(255, 255, 255, 0.4);
`

const HeadSection = styled.div`
    height:72px;
`;


const ActionSection = styled.div`
    position: relative;
    margin-top:14px;
    padding-left:20px;
    display:flex;
    justify-content: space-between;
`;
const ProfileSection = styled.div`
    display:flex;
    color: #FFFFFF;
    align-items: center;
`
const ProfileImg = styled.div`
	left: 10%;
	background: #c4c4c4;
    width:36px;
    height:36px;
    border-radius:100%;
`;

const ProgileName = styled.span`
    margin-left:12px;
    font-size:14px;
`

const LateDate = styled.span`
    margin-left:12px;
    font-size:16px;
    color:#C6C6C6;
`

const ControlSection = styled.div`
    display:flex;
    align-items: center;
    margin-right:30px;
`
const PlayButton = styled.img`
    width:15px;
    height:15px;

`;

const MuteButton = styled.img`
    width:14.5px;
    height:15px;
    margin-left:20px
`

const MoreButton = styled.img`
    width:14px;
    height:3px;
    margin-left:20px
`
const Gradation = styled.div`
	position: absolute;
    z-index:101;
	width:329px;
    height:584px;
    border-radius:8px;
	top: 0px;
    border:none;
	background: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 100%, rgba(0, 0, 0, 0.1) 100%);
`;

export default function HighlightCard(props:DetailProps) {

    const [isFocus, setIsFocus] = useState(false);
    const name = "stack11";

    const lateData = "14주";
	return (
		<Card>
			{props.isFocus ? (
				<HeadSection>
					<HighlightBar />
					<ActionSection>
						<ProfileSection>
							<ProfileImg />
							<ProgileName>{name}</ProgileName>
							<LateDate>{lateData}</LateDate>
						</ProfileSection>

						<ControlSection>
							<PlayButton src={PlayImg} />
							<MuteButton src={Mute} />
							<MoreButton src={More_} />
						</ControlSection>
					</ActionSection>
				</HeadSection>
			) : (
				<></>
			)}
			<Gradation />
		</Card>
	);
}