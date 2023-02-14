import { takeLatest, put, all, call }     from 'typed-redux-saga/macro';
import { User }                           from 'firebase/auth';


import { USER_ACTION_TYPES }              from './user.types';

import {
  signInSuccess,
  signInFailed,
  signUpSuccess,
  signUpFailed,
  signOutSuccess,
  signOutFailed,
  EmailSignInStart,
  SignUpStart,
  SignUpSuccess
}                                           from './user.action';

import {
  getCurrentUser,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
  createAuthUserWithEmailAndPassword,
  signOutUser,
  AdditionalInformation
}                                           from '../../utils/firebase/firebase.utils';

//! -----------------------------------------------------------------------------------------------

const uat = USER_ACTION_TYPES;

export function* getSnapshotFromUserAuth( 
  userAuth: User, 
  additionalDetails?: AdditionalInformation 
  ) {
  try {
    const userSnapshot = yield* call( 
      createUserDocumentFromAuth,
      userAuth,
      additionalDetails
     );

     if ( userSnapshot ) {
     console.log('user snapshot  ->  ', userSnapshot);
     console.log('user snapshot data  -> ', userSnapshot.data());

    yield* put( signInSuccess( { id: userSnapshot.id, ...userSnapshot.data( ) }) 
      ); 
    }
     
  } catch ( error ) {
    yield* put( signInFailed( error as Error) );
  }
};

export function* signInWithGoogle( ) {
  try {
    const { user } = yield call( signInWithGooglePopup );
    yield* call( getSnapshotFromUserAuth, user );
  } catch ( error ) {
    yield* put( signInFailed( error as Error) );
  }
};

export function* signInWithEmail( { payload: { email, password },
 }: EmailSignInStart ) {
  try {
    const userCredential = yield* call( 
      signInAuthUserWithEmailAndPassword,
      email,
      password
     );

    if ( userCredential ) {
      const { user } = userCredential;
      yield* call( getSnapshotFromUserAuth, user );
    }
  } catch ( error ) {
    yield* put( signInFailed( error as Error) );
  }
};

export function* isUserAuthenticated( ) {
  try {
    const userAuth = yield* call( getCurrentUser );
    if ( !userAuth ) return;
    yield* call( getSnapshotFromUserAuth, userAuth );
  } catch ( error ) {
    yield* put( signInFailed( error as Error) );
  }
};

export function* signUp( { payload: { email, password, displayName },
 }: SignUpStart ) {
  try {
    const userCredential = yield* call( 
      createAuthUserWithEmailAndPassword,
      email,
      password
     );
    if ( userCredential ) {
      const { user } = userCredential;
      yield* put( signUpSuccess( user, { displayName } ) );
    }
  } catch ( error ) {
    yield* put( signUpFailed( error as Error) );
  }
};

export function* signOut(  ) {
  try {
    yield* call( signOutUser );
    yield* put( signOutSuccess( ) );
  } catch ( error ) {
    yield* put( signOutFailed( error as Error) );
  }
}

export function* signInAfterSignUp( { payload: { user, additionalDetails } }: SignUpSuccess ) {
  yield* call( getSnapshotFromUserAuth, user, additionalDetails );
}

export function* onGoogleSignInStart(  ) {
  yield* takeLatest( uat.GOOGLE_SIGN_IN_START, signInWithGoogle );
}

export function* onCheckUserSession(  ) {
  yield* takeLatest( uat.CHECK_USER_SESSION, isUserAuthenticated );
}

export function* onEmailSignInStart(  ) {
  yield* takeLatest( uat.EMAIL_SIGN_IN_START, signInWithEmail );
}

export function* onSignUpStart(  ) {
  yield* takeLatest( uat.SIGN_UP_START, signUp );
}

export function* onSignUpSuccess(  ) {
  yield* takeLatest( uat.SIGN_UP_SUCCESS, signInAfterSignUp );
}

export function* onSignOutStart(  ) {
  yield* takeLatest( uat.SIGN_OUT_START, signOut );
}

export function* userSagas(  ) {
  yield* all( [
    call( onCheckUserSession ),
    call( onGoogleSignInStart ),
    call( onEmailSignInStart ),
    call( onSignUpStart ),
    call( onSignUpSuccess ),
    call( onSignOutStart ),
  ] );
}
