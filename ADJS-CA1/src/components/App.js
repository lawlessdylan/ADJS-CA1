/**
 * @Author: dylanlawless
 * @Date:   2019-10-21T09:31:29+01:00
 * @Last modified by:   dylanlawless
 * @Last modified time: 2019-11-07T14:25:09+00:00
 */
 import 'bootstrap/dist/css/bootstrap.min.css';



import React from 'react';
import './App.css';
import Tech from './News/Tech';
import Business from './News/Business';
import Home from './News/Home';

import MyNav from './Nav';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <Router>
        <MyNav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/tech" component={Tech} />
            <Route path="/business" component={Business} />
          </Switch>
    </Router>

  );
}

export default App;
