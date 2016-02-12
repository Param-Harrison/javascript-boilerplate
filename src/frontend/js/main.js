// if (!window.sessionStorage.getItem('token')) {
//     window.location = '/';
// }

import FastClick from 'fastclick';
import React from 'react';
import { render } from 'react-dom';

import Root from './app/Root';
import reducers from './app/reducers';
import routes from './app/routes';
import configureStore from './app/configureStore';

const store = configureStore(reducers, routes);

FastClick.attach(document.body);

render(
    <Root {...{store}} />,
    document.getElementById('root')
);