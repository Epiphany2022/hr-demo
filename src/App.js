import React from 'react';
import './App.css';
import { Route,  BrowserRouter, Switch } from 'react-router-dom';
import Register from './containers/Register/Register';
import Login from './containers/Login/Login'
function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Switch>
      <Route exact path="/" component={Register} />
      <Route path="/login" component={Login} />
    </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
