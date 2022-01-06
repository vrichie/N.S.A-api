import React from 'react';
import ReactDOM from 'react-dom';

import Layout from './layouts/layout';
import Login from './components/Login';


import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';


import './index.css';
import 'semantic-ui-css/semantic.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>


    <Router>

      <Switch>

          <Route exact path="/" component={Login}/>

          <Route exact path="/home" component={Layout}/>

      </Switch>




    </Router>





  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
