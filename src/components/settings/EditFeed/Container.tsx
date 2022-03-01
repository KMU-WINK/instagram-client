import styled from "styled-components";

interface ContainerProps {
	topMargin: number;
	height: number;
}

const Container = styled.div<ContainerProps>`
	margin-top: ${(props) => props.topMargin || 0}px;
	margin-left: 95px;
	height: ${(props) => props.height}px;
	width: 100%;
	display: flex;
	text-align: left;
	flex-direction: column;
`;

export default Container;
