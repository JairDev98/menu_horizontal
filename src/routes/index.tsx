import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HorizontalMenu from '../components/Horizontal_menu';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={HorizontalMenu} />
  </Switch>
);

export default Routes;
