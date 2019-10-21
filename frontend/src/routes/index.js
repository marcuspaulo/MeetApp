import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from '../pages/Main';
import SignIn from '../pages/Auth/SignIn';
import SignUp from '../pages/Auth/SignUp';

// import Main from '~/pages/Main';
// import SignIn from '~/pages/SignIn';
// import SignUp from '~/pages/SingUp';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/signin" component={SignIn} />
      <Route path="signup" component={SignUp} />
      <Route path="/Main" component={Main} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
