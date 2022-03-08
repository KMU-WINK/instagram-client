import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
// @ts-ignore
import testIMG from "../../img/sea.jpg";
// @ts-ignore
import Prev from "../../img/Prev.svg";
// @ts-ignore
import Next from "../../img/Next.svg";

interface SlideProps {
	width: string;
	height: string;
	images?: any;
	imageUrl?: string;
	isUploadPage?: boolean;
}

const Container = styled.div`
	margin: auto;
	overflow: hidden;
	margin-top: -38px;
`;
const Button = styled.img``;

const Slide = styled.img`
	height: 848px;
	width: 848px;
`;

const SliderContainer = styled.div`
	margin: 0 auto;
	display: flex; // 이미지들을 가로로 나열합니다.
`;

const SlideDiv = styled.div``;

const Center = styled.div`
	position: relative;
	display: flex;
	justify-content: space-between;
	z-index: 2;
	opacity: 0.5;
`;

const TOTAL_SLIDES = 2; // 전체 슬라이드 개수

export default function Slider(props: SlideProps) {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [totalSlide, setTotalSlide] = useState(1);
	const [image, setImage] = useState("");
	const slideRef = React.useRef<any>();

	// Next 버튼 클릭 시
	const NextSlide = () => {
		if (currentSlide >= totalSlide - 1) {
			// 더 이상 넘어갈 슬라이드가 없으면
			return; // 클릭이 작동하지 않습니다.
		} else {
			setCurrentSlide(currentSlide + 1);
		}
	};

	console.log(currentSlide);
	console.log(totalSlide);

	// Prev 버튼 클릭 시
	const PrevSlide = () => {
		if (currentSlide === 0) {
			return; // 클릭이 작동하지 않습니다.
		} else {
			setCurrentSlide(currentSlide - 1);
		}
	};

	useEffect(() => {
		if (props.images) {
			setTotalSlide(props.images.length);
		}
	}, [props.images]);

	useEffect(() => {
		slideRef.current.style.transition = "all 0.5s ease-in-out";
		slideRef.current.style.transform = `translateX(-${currentSlide}00%)`; // 백틱을 사용하여 슬라이드로 이동하는 에니메이션을 만듭니다.
	}, [currentSlide]);

	const makeImgData = (image: any) => {
		const fileReader = new FileReader();
		fileReader.readAsDataURL(image);
		fileReader.onload = function (e: any) {
			console.log(e.target.result);
			setImage(e.target.result);
		};
	};

	// todo: 사진 여러장

	// const imgData = makeImgData(props.images.item(0));
	// Array.from(props.images).forEach((file)=> {
	// 	makeImgData(file);
	// })

	return (
		<Container>
			<Center style={{ top: parseInt(props.height) / 2 + props.height.replace(/[0-9]/g, "") }}>
				<Button src={Prev} onClick={PrevSlide} />
				<Button src={Next} onClick={NextSlide} />
			</Center>
			<SliderContainer ref={slideRef}>
				{/*{props.images.map((image : object) => {*/}

				{/*{props.images.map((image : object) => {*/}
				{props.images &&
					props.images.map((item: any) => (
						<SlideDiv
							style={{
								width: props.width,
								height: props.height,
								display: props.isUploadPage ? "none" : "block",
							}}
						>
							<Slide src={item.url ? "http://api.redesigninsta.kro.kr/" + item.url : testIMG} />
						</SlideDiv>
					))}
				{props.imageUrl && (
					<SlideDiv
						style={{
							width: props.width,
							height: props.height,
							display: props.isUploadPage ? "none" : "block",
						}}
					>
						<Slide src={props.imageUrl !== null ? props.imageUrl : testIMG} />
					</SlideDiv>
				)}
				{props.imageUrl === null && (
					<SlideDiv
						style={{
							width: props.width,
							height: props.height,
							display: props.isUploadPage ? "none" : "block",
						}}
					>
						<Slide src={testIMG} />
					</SlideDiv>
				)}
				{/*})}*/}
				{/*<SlideDiv>*/}
				{/*	*/}
				{/*</SlideDiv>*/}
			</SliderContainer>
		</Container>
	);
}
