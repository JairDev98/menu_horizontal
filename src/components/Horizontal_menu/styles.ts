import styled from 'styled-components';
import { shade } from 'polished';

export const Menubar = styled.div`
  background-color: #5a5e23;
  display: flex;
  height: 50px;
  justify-content: center;
  margin: 30px 300px;
  border-radius: 8px;

  a {
    background: #393d1c;
    width: 170px;
    height: 50px;
    margin-left: 5px;

    text-decoration: none;
    transition: height 0.5s, background-color 0.3s;

    span {
      margin-top: 5%;
      display: flex;
      align-items: center;
      place-content: center;
    }

    hr {
      visibility: hidden;
      margin: 5px 20px;
      color: #f9f88c;
    }

    img {
      width: 100%;
      margin-top: 40%;
      margin-left: 10%;
      opacity: 0;
      transition: opacity 0.2s;
    }
  }

  a:hover {
    background: ${shade(0.2, '#393d1c')};
    height: 300px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;

    hr {
      visibility: visible;
    }

    img {
      visibility: visible;
      transition: opacity 2.2s;
      opacity: 0.8;
    }
  }
`;
