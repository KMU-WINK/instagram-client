import styled from "styled-components";

interface ContainerProp {
	topMargin : number;
	height: number;
}

const Container = styled.div<ContainerProp>`
	margin-top: ${(props) => (props.topMargin || 0)}px;
	height: ${(props) => (props.height)}px;
	width: 100%;
	display: flex;
	flex-direction: row;
`;

export default Container;
