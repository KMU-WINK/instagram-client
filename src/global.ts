import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle` 
	${reset};
  input:focus {outline:none;}

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyles;
