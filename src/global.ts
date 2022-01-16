import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle` 
	${reset};
  input:focus {outline:none;}
`;

export default GlobalStyles