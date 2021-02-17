import React from 'react';

import { Menubar } from './styles';

import snake from '../../assets/snake.png';

const Dashboard: React.FC = () => {
  return (
    <>
      <Menubar>
        <a href="none">
          <span>Solid Snake</span>
          <hr />
          <img src={snake} alt="Snake" />
        </a>
        <a href="none">
          <span>Big Boss</span>
          <hr />
          <img src={snake} alt="BigBoss" />
        </a>
        <a href="none">
          <span>Liquid Snake</span>
          <hr />
          <img src={snake} alt="Liquid Snake" />
        </a>
        <a href="none">
          <span>Solidus</span>
          <hr />
          <img src={snake} alt="Solidus" />
        </a>
      </Menubar>
    </>
  );
};

export default Dashboard;
