import React from 'react';
import { Router } from 'react-router-dom';
import Routes from './routes';

import './config/ReactotronConfig';

import history from './services/history';

function App() {
  return (
    <Router history={history}>
      <Routes />
    </Router>
  );
}

export default App;
