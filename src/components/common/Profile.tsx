import styled from "styled-components";


interface ProfileProps {
	width?: string;
	height?: string;
	margin?: string;
}

const Profile = styled.img<ProfileProps>`
	width: ${(props) => props.width ? props.width : '80px'};
	height: ${(props) => props.height ? props.height : '80px'};
	margin: ${(props) => props.margin ? props.margin : '0'};
  border-radius: 100%;

`;

export default Profile;