import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';


import HomePage                       from './pages/homepage.comp';
import ShopPage                       from './pages/shop.comp';
// import SignInPage                     from './pages/signin-page.comp';
import SignInAndSignUpPage            from './pages/Comps/sign-in-and-up.comp';

import Header                         from './Components/header.comp';
import { auth }                       from './firebase/firebase.utils';
import { createUserProfile }          from './firebase/firebase.utils';
import { connect }                    from 'react-redux';
import { setCurrentUser }             from './redux/user/user.actions'   ;

import './pages/homepage.styles.scss';
import './App.css';
//! -----------------------------------------------------------------------------

//  Convert App function to class component so that wecan store states 
//  like authenticated users.


class  App extends React.Component {
   
unsubscribeFromAuth = null

//  We don't want to remount app. We just want to know when firebase has realized that 
//  the authentification state has changed when user signs in or out.
//  'user' object is the user state .. goes into function as the parameter.

componentDidMount() {

  const { setCurrentUser } = this.props;

  this.unsubscribeFromAuth = auth.onAuthStateChanged ( async userAuth => {
    if ( userAuth ) {
      const userRef = await createUserProfile ( userAuth );
      
      userRef.onSnapshot ( snapShot => {
        this.props.setCurrentUser ({
            id: snapShot.id,
            ...snapShot.data()
        }); 
    });
    }
    setCurrentUser ( userAuth );
  });
};


// componentDidMount() {
//   auth.onAuthStateChanged(user => {
//     this.setState( { currentUser: user });
//   });
// }
//  This will close the subscription.
componentWillUnmount() {
  this.unsubscribeFromAuth();
}

  render() {
    return ( 
        <div> 
          <Header  />
           <Switch>
            
            <Route   exact path='/shop' component = { ShopPage } />
            <Route   path='/signin' 
                     render = { () => this.props.currentUser ? ( 
                        <Redirect to="/" />

                     ) : (
                      <SignInAndSignUpPage />

                     )} 
             />
            <Route   path='/' component = { HomePage } />
          </Switch>
      </div> );

  }
  
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = ( dispatch ) => ({
  setCurrentUser: user => dispatch ( setCurrentUser( user ) )
})


export default connect(mapStateToProps, mapDispatchToProps ) (App);
