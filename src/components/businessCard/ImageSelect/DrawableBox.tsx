import React, { useRef, useState } from "react";
import styled from "styled-components";
// @ts-ignore
import InputImg from "../../../img/DrawImage.png";
import BlueButton from "../../common/BlueButton";
import AfterInput from "./AfterInput";

const DrawableContainer = styled.div`
  width: 300px;
  height: 240px;
  margin-left: 490px;
  margin-top: 230px;
  text-align: center;
`;

const ImageInput = styled.img`
  width: 145px;
  height: 125px;
`;

const UploadImg = styled.input.attrs({
	type: "file"
})`
  display: none;
`;

const MyImg = styled.img`
  width: 300px;
  height: 518px;
  object-fit: cover;
`;

const Text = styled.div`
  margin-top: 25px;
  font-size: 21px;
  font-weight: 500;
  margin-bottom: 40px;
`;

export default function DrawableBox() {
	const [image, setImage] = useState("");

	const fileInput = useRef<any>();
	const onChangeHandle = (event: any) => {
		if (event.target.files.length) {
			const imgTarget = event.target.files[0];
			const fileReader = new FileReader();
			fileReader.readAsDataURL(imgTarget);
			fileReader.onload = function(e: any) {
				setImage(e.target.result);
			};
		} else {
			setImage("");
		}
	};
	return (
		<>
			<DrawableContainer style={{ marginTop: image === "" ? "230px" : "60px" }}>
				{image === "" ? <ImageInput src={InputImg} /> : <MyImg src={image} />}
				<UploadImg
					accept="image/jpg,impge/png,image/jpeg"
					name="cover_img"
					onChange={onChangeHandle}
					ref={fileInput} />
				<Text style={{ display: image === "" ? "" : "none" }}>사진을 여기에 끌어다 놓으세요</Text>
				<BlueButton onClick={() => {
					fileInput.current.click();
				}} style={{ fontSize: "16px", display: image === "" ? "" : "none" }} height={32} width={139}>컴퓨터에서
					선택</BlueButton>
				{image === "" ? "" : <AfterInput />}
			</DrawableContainer>
		</>
	);
}

