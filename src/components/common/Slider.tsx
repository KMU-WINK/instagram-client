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
}

const Container = styled.div`
	margin: auto;
	overflow: hidden;
	margin-top: -38px;
`;
const Button = styled.img``;

const Slide = styled.img`
	height: 100%;
`;

const SliderContainer = styled.div`
	margin: 0 auto;
	display: flex; // 이미지들을 가로로 나열합니다.
`;

const TOTAL_SLIDES = 2; // 전체 슬라이드 개수

export default function Slider(props: SlideProps) {
	const [currentSlide, setCurrentSlide] = useState(0);
	const slideRef = React.useRef<any>();

	//styled component
	const SlideDiv = styled.div`
		width: ${props.width};
		height: ${props.height};
	`;

	const Center = styled.div`
		position: relative;
		display: flex;
		justify-content: space-between;
		z-index: 2;
		top: ${parseInt(props.height) / 2}${props.height.replace(/[0-9]/g, "")};
		opacity: 0.5;
	`;

	// Next 버튼 클릭 시
	const NextSlide = () => {
		if (currentSlide >= TOTAL_SLIDES) {
			// 더 이상 넘어갈 슬라이드가 없으면
			return; // 클릭이 작동하지 않습니다.
		} else {
			setCurrentSlide(currentSlide + 1);
		}
	};

	// Prev 버튼 클릭 시
	const PrevSlide = () => {
		if (currentSlide === 0) {
			return; // 클릭이 작동하지 않습니다.
		} else {
			setCurrentSlide(currentSlide - 1);
		}
	};

	useEffect(() => {
		slideRef.current.style.transition = "all 0.5s ease-in-out";
		slideRef.current.style.transform = `translateX(-${currentSlide}00%)`; // 백틱을 사용하여 슬라이드로 이동하는 에니메이션을 만듭니다.
	}, [currentSlide]);

	return (
		<Container>
			<Center>
				<Button src={Prev} onClick={PrevSlide} />
				<Button src={Next} onClick={NextSlide} />
			</Center>
			<SliderContainer ref={slideRef}>
				<SlideDiv>
					<Slide src={testIMG} />
				</SlideDiv>
				<SlideDiv>
					<Slide src={testIMG} />
				</SlideDiv>
				<SlideDiv>
					<Slide src={testIMG} />
				</SlideDiv>
			</SliderContainer>
		</Container>
	);
}
