import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { BgColor, Mode, PointColor, ThemeContext } from "../../../../contexts/ThemeContext";
import apiClient from "../../../../lib/apiClient";

interface ThemeModalProps {}

const StyledThemeModal = styled.div`
	position: fixed;

	width: 340px;
	height: 268px;

	top: 102px;
	right: 42px;

	background: rgba(100, 100, 100, 0.85);
	backdrop-filter: blur(15px);
	/* Note: backdrop-filter has minimal browser support */

	border-radius: 10px;

	padding: 20px 25px;
`;

const StyledTitle = styled.a`
	font-weight: 500;
	color: #ffffff;
`;

const StyledButton = styled.a`
	font-size: "14px";
	color: #ffffff;

	cursor: pointer;

	& + & {
		margin-left: 12px;
	}
`;

const StyledFlexDiv = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin: 18px 0 12px 0;
`;

const StyledButtonFlexDiv = styled.div`
	display: flex;

	justify-content: end;
`;

const StyledCircle = styled.div<{ color: string }>`
	width: 30px;
	height: 30px;

	cursor: pointer;

	border-radius: 15px;

	background-color: ${(props) => props.color};

	margin-bottom: 10px;

	& + & {
		margin-left: 13px;
	}
`;

const StyledToggle = styled.label`
	position: relative;
	display: inline-block;
	width: 30px;
	height: 17px;

	input {
		opacity: 0;
		width: 0;
		height: 0;
	}

	.slider {
		position: absolute;
		cursor: pointer;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #ccc;
		-webkit-transition: 0.4s;
		transition: 0.4s;
	}

	.slider:before {
		position: absolute;
		content: "";
		height: 13px;
		width: 13px;
		left: 2px;
		bottom: 2px;
		background-color: white;
		-webkit-transition: 0.4s;
		transition: 0.4s;
	}

	input:checked + .slider {
		background-color: #2196f3;
	}

	input:focus + .slider {
		box-shadow: 0 0 1px #2196f3;
	}

	input:checked + .slider:before {
		-webkit-transform: translateX(13px);
		-ms-transform: translateX(13px);
		transform: translateX(13px);
	}

	/* Rounded sliders */
	.slider.round {
		border-radius: 17px;
	}

	.slider.round:before {
		border-radius: 50%;
	}
`;

const ThemeModal: React.FC<ThemeModalProps> = () => {
	let navigate = useNavigate();
	const [mode, setMode] = useState<Mode>("light");
	const { theme, setTheme } = useContext(ThemeContext);

	useEffect(() => {
		console.log(theme);
	}, [theme]);

	const toggleMode = () => {
		const currentBg = theme?.name.split("-")[1];

		const currentPoint = theme?.name.split("-")[2];

		if (mode === "light") {
			setMode("dark");

			setTheme(`${"dark"}-${currentBg as BgColor}-${currentPoint as PointColor}`);
		} else {
			setMode("light");

			setTheme(`${"light"}-${currentBg as BgColor}-${currentPoint as PointColor}`);
		}
	};

	const onClickBg = (type: BgColor) => {
		const currentMode = theme?.name.split("-")[0];

		const currentPoint = theme?.name.split("-")[2];

		setTheme(`${currentMode as Mode}-${type}-${currentPoint as PointColor}`);
	};

	const onClickPoint = (type: PointColor) => {
		const currentMode = theme?.name.split("-")[0];

		const currentBg = theme?.name.split("-")[1];

		console.log(`${currentMode as Mode}-${currentBg as BgColor}-${type}`);

		setTheme(`${currentMode as Mode}-${currentBg as BgColor}-${type}`);
	};

	const onSubmit = () => {
		apiClient.get("/auth/get/me").then((res) => {
			console.log(res.data.user.id);
			apiClient
				.put("/auth/" + res.data.user.id, {
					themaColor: theme.name,
				})
				.then((r) => {
					console.log(r);
					navigate("/feed/" + res.data.user.id);
				});
		});
	};

	return (
		<StyledThemeModal>
			<div style={{ display: "flex", justifyContent: "space-between" }}>
				<StyledTitle>배경</StyledTitle>
				<StyledToggle className="switch">
					<input type="checkbox" onChange={toggleMode} />
					<span className="slider round"></span>
				</StyledToggle>
			</div>

			<StyledFlexDiv>
				<StyledCircle color="#FF9090" onClick={() => onClickBg("Original")} />
				<StyledCircle color="#FF9090" onClick={() => onClickBg("Red")} />
				<StyledCircle color="#FFAD7C" onClick={() => onClickBg("Orange")} />
				<StyledCircle color="#FFF89A" onClick={() => onClickBg("Yellow")} />
				<StyledCircle color="#8DFFB8" onClick={() => onClickBg("Green")} />
				<StyledCircle color="#A3F1FF" onClick={() => onClickBg("Blue")} />
				<StyledCircle color="#DF81FF" onClick={() => onClickBg("Purple")} />
			</StyledFlexDiv>
			<StyledTitle>상징색</StyledTitle>
			<StyledFlexDiv>
				<StyledCircle color="#FF9090" onClick={() => onClickPoint("Original")} />
				<StyledCircle color="#FF96F4" onClick={() => onClickPoint("Pink")} />
				<StyledCircle color="#FF1010" onClick={() => onClickPoint("Red")} />
				<StyledCircle color="#FF6A2A" onClick={() => onClickPoint("Orange")} />
				<StyledCircle color="#EAAA09" onClick={() => onClickPoint("Yellow")} />
				<StyledCircle color="#317A0E" onClick={() => onClickPoint("Green")} />
				<StyledCircle color="#09A1A1" onClick={() => onClickPoint("Aqua Green")} />
				<div style={{ margin: "0 12px" }} />
				<StyledCircle color="#00D3E0" onClick={() => onClickPoint("Mint")} />
				<StyledCircle color="#1C00CB" onClick={() => onClickPoint("Blue")} />
				<StyledCircle color="#086DA6" onClick={() => onClickPoint("Navy")} />
				<StyledCircle color="#8F0851" onClick={() => onClickPoint("Rose")} />
				<StyledCircle color="#A047CE" onClick={() => onClickPoint("Light Purple")} />
				<StyledCircle color="#8400EA" onClick={() => onClickPoint("Purple")} />
			</StyledFlexDiv>
			<StyledButtonFlexDiv>
				<StyledButton>취소</StyledButton>
				<StyledButton onClick={onSubmit}>적용하기</StyledButton>
			</StyledButtonFlexDiv>
		</StyledThemeModal>
	);
};

export default ThemeModal;
