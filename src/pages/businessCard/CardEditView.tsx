import React, { useRef, useState } from "react";
import styled from "styled-components";
import SideBar from "../../components/businessCard/SideBar";
import ModalHeader from "../../components/businessCard/ModalHeader";
import CardMain from "../../components/businessCard/CardMain";
import CardFront from "../../components/businessCard/CardFront";
import CardBack from "../../components/businessCard/CardBack";
import html2canvas from "html2canvas";
import apiClient from "../../lib/apiClient";

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

	const dataURLtoFile = (dataurl: string, filename: string) => {
		const arr = dataurl.split(",");
		const mime = arr[0].match(/:(.*?);/)[1];
		const bstr = atob(arr[1]);
		let n = bstr.length;
		const u8arr = new Uint8Array(n);
		while (n) {
			u8arr[n - 1] = bstr.charCodeAt(n - 1);
			n -= 1; // to make eslint happy
		}
		return new File([u8arr], filename, { type: mime });
	};

	const onFinish = () => {
		if (mainRef.current) {
			html2canvas(mainRef.current).then((canvas) => {
				const data = new FormData();
				const file = dataURLtoFile(canvas.toDataURL("image/png"), "xxxx.png");
				data.append("recfile", file, file.name);

				apiClient.post("/businessCard/1", data).then((res) => console.log(res.data));
			});
		}
	};

	return (
		<>
			<CardSettingsModal>
				<ModalHeader onClick={() => onFinish()} headerTitle={"명함 편집하기"} />
				<ModalBody>
					<CardMain style={{ paddingLeft: "45px" }} ref={mainRef}>
						<CardFront color={state} alignValue={alignValue} />
						<CardBack color={state} />
					</CardMain>
					<SideBar page={"편집"} getPalette={getPalette} getAlign={getAlign} />
				</ModalBody>
			</CardSettingsModal>
		</>
	);
}
