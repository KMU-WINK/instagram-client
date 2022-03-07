import React, { useRef, useState } from "react";
import styled from "styled-components";
import SideBar from "../../components/businessCard/SideBar";
import ModalHeader from "../../components/businessCard/ModalHeader";
import CardMain from "../../components/businessCard/CardMain";
import CardFront from "../../components/businessCard/CardFront";
import CardBack from "../../components/businessCard/CardBack";
import html2canvas from "html2canvas";

const CardSettingsModal = styled.div`
	position: fixed;
	top: 40px;
	left: 363px;
	width: 1250px;
	height: 800px;
	border-radius: 16px;
	border: 1px solid beige;
	overflow: hidden;
`;

const ModalBody = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	height: 740px;
`;

export default function CardEditView() {
	const mainRef = useRef<HTMLDivElement>(null);
	const [state, setState] = useState("#F5F5F5");
	const [alignValue, setAlignValue] = useState("left");

	const getPalette = (color: string) => {
		console.log(color);
		setState(color);
	};

	const getAlign = (value: string) => {
		setAlignValue(value);
	};

	const onCapture = () => {
		if (mainRef.current) {
			html2canvas(mainRef.current).then((canvas) => {
				onSaveAs(canvas.toDataURL("image/png"), "download.png");
			});
		}
	};

	const onSaveAs = (uri: string, filename: string) => {
		const link = document.createElement("a");
		document.body.appendChild(link);
		link.href = uri;
		link.download = filename;
		link.click();
		document.body.removeChild(link);
	};

	return (
		<>
			<CardSettingsModal>
				<ModalHeader headerTitle={"명함 편집하기"} />
				<ModalBody>
					<CardMain style={{ paddingLeft: "45px" }} ref={mainRef}>
						<CardFront color={state} alignValue={alignValue} />
						<CardBack color={state} />
					</CardMain>
					<SideBar page={"편집"} getPalette={getPalette} getAlign={getAlign} />
				</ModalBody>
			</CardSettingsModal>
			<button onClick={() => onCapture()}>BYTTT</button>
		</>
	);
}
