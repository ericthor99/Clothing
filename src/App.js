import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import HomePage from './Components/homepage.comp';
import './Components/homepage.styles.scss';

const HatsPage = () => (
    <div>
      <h1>Hats Page</h1>
    </div>
)

function App() {
  return ( <div> 
    <Switch>
      
      <Route exact path='/shop/hats' component = { HatsPage } />
      <Route   path='/' component = { HomePage } />
    </Switch>
   </div> );
}

export default App;
