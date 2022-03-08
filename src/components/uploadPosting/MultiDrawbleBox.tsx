import React, { useRef, useState } from "react";
import styled from "styled-components";
// @ts-ignore
import InputImg from "../../img/inputImg.svg";
import BlueButton from "../common/BlueButton";
import AfterInput from "../businessCard/ImageSelect/AfterInput";
import Slider from "../common/Slider";

interface MultiDrawbleBoxProps {
	formAppend?: any;
}
const DrawableContainer = styled.div`
	width:40vw;
	height:40vw;
	margin: 0 auto;
	margin-top: 230px;
	text-align: center;
	overflow: hidden;
`;

const ImageInput = styled.img`
	width: 145px;
	height: 125px;
`;

const UploadImg = styled.input.attrs({
	type: "file",
})`
	display: none;
`;

const Text = styled.div`
	margin-top: 25px;
	font-size: 21px;
	font-weight: 500;
	margin-bottom: 40px;
	color: #fff;
`;

export default function MultiDrawableBox(props : MultiDrawbleBoxProps) {
	const [image, setImage] = useState("");
	const [images, setImages] = useState([]);

	const fileInput = useRef<any>();
	const onChangeHandle = (event: any) => {
		if (event.target.files.length) {
			const imgTarget = event.target.files[0];
			setImages(event.target.files);
			const fileReader = new FileReader();
			fileReader.readAsDataURL(imgTarget);
			fileReader.onload = function (e: any) {
				setImage(e.target.result);
				props.formAppend(e.target.result);
			};
		} else {
			setImage("");
		}
	};


	return (
		<>
			<DrawableContainer style={{ marginTop: image === "" ? "230px" : "60px" }}>
				{image === "" ? <ImageInput src={InputImg} /> : <Slider images={images} width="40vw" height="40vw"></Slider>}
				<UploadImg
					accept="image/jpg,impge/png,image/jpeg"
					name="cover_img"
					onChange={onChangeHandle}
					multiple
					ref={fileInput}
				/>
				<Text style={{ display: image === "" ? "" : "none" }}>사진을 여기에 끌어다 놓으세요</Text>
				<BlueButton
					onClick={() => {
						fileInput.current.click();
					}}
					style={{ fontSize: "16px", display: image === "" ? "" : "none" }}
					height={32}
					width={139}
				>
					컴퓨터에서 선택
				</BlueButton>
			</DrawableContainer>
		</>
	);
}
