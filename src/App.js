import React from 'react';
import { Switch, Route } from 'react-router-dom';


import HomePage   from './Components/homepage.comp';
import ShopPage   from './Components/shop.comp';
import Header     from './Components/header.comp';

import './Components/homepage.styles.scss';
import './App.css';

function App() {
  return ( <div> 
    <Header/>
    <Switch>
      
      <Route exact path='/shop' component = { ShopPage } />
      <Route   path='/' component = { HomePage } />
    </Switch>
   </div> );
}

export default App;
