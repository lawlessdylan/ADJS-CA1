/**
 * @Author: dylanlawless
 * @Date:   2019-10-21T09:31:29+01:00
 * @Last modified by:   dylanlawless
 * @Last modified time: 2019-10-21T09:42:37+01:00
 */



import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
