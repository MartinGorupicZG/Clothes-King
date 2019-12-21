import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config={
    apiKey: "AIzaSyBBuZPdUR6y26EoN6FjTunkvmgVPrE4fJw",
    authDomain: "king-db-43723.firebaseapp.com",
    databaseURL: "https://king-db-43723.firebaseio.com",
    projectId: "king-db-43723",
    storageBucket: "king-db-43723.appspot.com",
    messagingSenderId: "562546948122",
    appId: "1:562546948122:web:897dbfdc7fc1f3c0ad39a3",
    measurementId: "G-K1Q1MYJTZ6"
  };

  firebase.initializeApp(config);
  export const auth=firebase.auth();
  export const firestore=firebase.firestore();

  const provider=new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'})

  export const signInWithGoogle=()=>auth.signInWithPopup(provider);

  export default firebase;