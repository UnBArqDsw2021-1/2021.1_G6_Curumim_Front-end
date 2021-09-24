import React from 'react';
import { render } from 'react-dom';
import Routes from './routes';

import './styles/global-styles.css';

//import * as serviceWorkerRegistration from './serviceWorkerRegistration';

render(
  <Routes />, document.getElementById('root')
  );

//serviceWorkerRegistration.register();