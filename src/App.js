import React from 'react';
import { Switch, Route } from 'react-router-dom';


import HomePage   from './pages/homepage.comp';
import ShopPage   from './pages/shop.comp';
import SignInPage from './pages/signin-page.comp';
import Header     from './Components/header.comp';
import { auth }   from './firebase/firebase.utils';

import './pages/homepage.styles.scss';
import './App.css';

//  Convert App function to class component so that wecan store states 
//  like authenticated users.


class  App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

unsubscribeFromAuth = null

//  We don't want to remount app. We just want to know when firebase has realized that 
//  the authentification state has changed when user signs in or out.
//  'user' object is the user state .. goes into function as the parameter.

componentDidMount() {
  auth.onAuthStateChanged(user => {
    this.setState( { currentUser: user });
  });
}
//  This will close the subscription.
componentWillUnmount() {
  this.unsubscribeFromAuth();
}

  render() {
    return ( 
        <div> 
          <Header currentUser={this.state.currentUser}/>
          <Switch>
            
            <Route exact path='/shop' component = { ShopPage } />
            <Route   path='/signin' component = { SignInPage } />
            <Route   path='/' component = { HomePage } />
          </Switch>
      </div> );

  }
  
}

export default App;
