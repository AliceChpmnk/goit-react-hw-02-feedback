import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    padding: 20px;
    background-color: #DCDCDC;
  }
  
  p {
    margin: 0;
  }
  li {
    list-style: none;
  }
  ul {
    padding: 0;
  }
  `;