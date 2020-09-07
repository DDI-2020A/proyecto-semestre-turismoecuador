
import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
// import 'firebase/storage';
// import 'firebase/functions';

const config = {
    apiKey: "AIzaSyDLsKp1LqfySFqHNJmbkJYrEfXyZqEJNzs",
    authDomain: "proyecto-turismo-ecuador.firebaseapp.com",
    databaseURL: "https://proyecto-turismo-ecuador.firebaseio.com",
    projectId: "proyecto-turismo-ecuador",
    storageBucket: "proyecto-turismo-ecuador.appspot.com",
    messagingSenderId: "814658718632",
    appId: "1:814658718632:web:fc56cceb75d0a76417ab9d",
    measurementId: "G-REE1T9W0WW"
};

app.initializeApp( config );

// export default app;
const auth = app.auth();
const db = app.database();
// export const storage = app.storage();
// export const functions = app.functions();


const FIREBASE = {
    db,
    auth
}

export default FIREBASE;


// *** Auth API ***

// doCreateUserWithEmailAndPassword = ( email, password ) =>
//   this.auth.createUserWithEmailAndPassword( email, password );

// export const listenAuthState = ( observer ) => {
//   return auth.onAuthStateChanged( observer );
// };
//
// export const doSignInWithEmailAndPassword = ( email, password ) => {
//   return auth.signInWithEmailAndPassword( email, password );
// };
//
// export const doLogout = () => auth.signOut();

// ***  User API ***

// const user = uid => db.ref(`users/${uid}`);
//
// const users = () => db.ref('users');

// doPasswordReset = email => this.auth.sendPasswordResetEmail( email );
//
// doPasswordUpdate = password =>
//   this.auth.currentUser.updatePassword( password );
