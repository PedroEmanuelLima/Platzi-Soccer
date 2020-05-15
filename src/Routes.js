import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Principal from './pages/Principal';
import Login from './pages/Login';
import NewProduct from './pages/NewProduct';
import TrasitionNewRequest from './pages/TrasitionNewRequest';
import NewRequest from './pages/NewRequest';
import Register from './pages/Register';

const Routes =() => {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Principal}/>
        <Route path="/login" component={Login}/>
        <Route path="/New_Product" component={NewProduct}/>
        <Route path="/Trasition_New_Request" component={TrasitionNewRequest}/>
        <Route path="/New_Request" component={NewRequest}/>
        <Route path="/Register" component={Register}/>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
