import styled from "styled-components";

const ScrollContainer = styled.div`
	width: 891px;
	margin-top: 20px;
	height: 860px;
	overflow-y: scroll;
	overflow-x: hidden;
	&::-webkit-scrollbar {
		width: 4px;
	}

	&::-webkit-scrollbar-thumb {
		height: 30%;
		background-color: #cdcdcd;
	}

	&::-webkit-scrollbar-track {
		background-color: #efefef;
	}
`;

export default ScrollContainer;
