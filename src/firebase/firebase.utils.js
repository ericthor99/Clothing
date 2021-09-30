// import { initializeApp } from 'firebase/compat/app';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// import { initializeApp } from 'firebase/app';
// import firebase from 'firebase/app';
// import 'firebase/firestore';
// import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBYc4cS0BUSdC-_bw_6NAUQHBMkFemojno",
    authDomain: "clothing-react-ae2db.firebaseapp.com",
    projectId: "clothing-react-ae2db",
    storageBucket: "clothing-react-ae2db.appspot.com",
    messagingSenderId: "738494406081",
    appId: "1:738494406081:web:b6e1f6eaa2f0d03f782340",
    measurementId: "G-NGM1E7FP5W"
  };

//  function must ensure that we're getting an object returned
//  exit from function.  Query inside firestore
//  Querying Firestore will always returns one of two objects: reference or snapshot 
//  They can be either Document or Collection versions.

  export const createUserProfile = async (userAuth, addData ) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapshot = await userRef.get();

    if (!snapshot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try { 
        await userRef.set ( {
          displayName,
          email,
          createdAt,
          ...addData
        });
      } catch ( error ) {
        console.log('error creating user, error.message');

      }
    }

    return userRef;
    // console.log (firestore.doc('users/1231sdfsd'))
  };


firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters( { prompt: 'select_account' } );
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;