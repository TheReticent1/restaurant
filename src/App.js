import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import HomePage from './components/HomePage';
import SignInUp from './components/SignInUp';
import Navigation from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navigation />
        <Switch>
          <Route path="/" exact component={HomePage} />
        </Switch>
      <SignInUp />
    </div>
  );
}

export default App;
