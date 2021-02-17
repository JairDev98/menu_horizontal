import { createGlobalStyle } from 'styled-components';

import backgroundImage from '../assets/mgs3.jpg';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: Roboto, serif;
  }

  a{
    color: #fff;
    font-size: 22px;
  }

  body{
  background: #fefefe;
  background-image: url(${backgroundImage});
  background-repeat:no-repeat;
  background-size: 50%;
  background-position-x: -10%;
}

  button{
    cursor: pointer;
  }
`;
