import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import HomePage from './Components/homepage.comp';
import ShopPage from './Components/shop.comp';
import './Components/homepage.styles.scss';

 

function App() {
  return ( <div> 
    <Switch>
      
      <Route exact path='/shop' component = { ShopPage } />
      <Route   path='/' component = { HomePage } />
    </Switch>
   </div> );
}

export default App;
