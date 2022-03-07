import React, { useEffect, useState } from "react";
import styled from "styled-components";
import BoxContainer from "./BoxContainer";
import Title from "./Title";
// @ts-ignore
import style1 from "../../../img/style1.png";
// @ts-ignore
import style2 from "../../../img/style2.png";
// @ts-ignore
import style3 from "../../../img/style3.png";
// @ts-ignore
import style4 from "../../../img/style4.png";
// @ts-ignore
import style5 from "../../../img/style5.png";
// @ts-ignore
import style6 from "../../../img/style6.png";

const InnerContainer = styled.div`
	width: 100%;
	height: 50px;
	clear: both;
	padding-top: 20px;
`;

const StyleContainer = styled.div`
	width: 364px;
	height: 44px;
	display: flex;
	flex-direction: row;
	gap: 17px;
`;

const Style = styled.img<{ state: boolean }>`
	width: 44px;
	height: 44px;
	padding: 7px;
	object-fit: none;
	border-radius: 50%;
	border: ${(props) => (props.state ? "1px #3796f0 solid" : "1px #dcdbdb solid")};
`;

export default function StyleBox() {
	const [style, setStyle] = useState([
		{
			id: "1",
			state: true,
		},
		{
			id: "2",
			state: false,
		},
		{
			id: "3",
			state: false,
		},
		{
			id: "4",
			state: false,
		},
		{
			id: "5",
			state: false,
		},
		{
			id: "6",
			state: false,
		},
	]);

	const handleOnClick = (e: any) => {
		const newArr: { id: string; state: boolean }[] = [];
		style.map((item, index) => {
			e.target.id == item.id
				? newArr.push({ id: item.id, state: true })
				: newArr.push({ id: item.id, state: false });
		});
		console.log(newArr);

		setStyle(newArr);
	};
	return (
		<>
			<BoxContainer style={{ height: "77px" }}>
				<Title content={"스타일"} />
				<InnerContainer>
					<StyleContainer>
						<Style src={style1} id={"1"} state={style[0].state} onClick={handleOnClick} />
						<Style src={style2} id={"2"} state={style[1].state} onClick={handleOnClick} />
						<Style src={style3} id={"3"} state={style[2].state} onClick={handleOnClick} />
						<Style src={style4} id={"4"} state={style[3].state} onClick={handleOnClick} />
						<Style src={style5} id={"5"} state={style[4].state} onClick={handleOnClick} />
						<Style src={style6} id={"6"} state={style[5].state} onClick={handleOnClick} />
					</StyleContainer>
				</InnerContainer>
			</BoxContainer>
		</>
	);
}
