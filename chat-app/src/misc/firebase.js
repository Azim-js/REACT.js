import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/database';
import 'firebase/storage'

const config={
    apiKey: "AIzaSyC1B8e_4bdI_LquUXbFi3iMvCIO5knfVus",
    authDomain: "chit-chat-713cc.firebaseapp.com",
    projectId: "chit-chat-713cc",
    storageBucket: "chit-chat-713cc.appspot.com",
    messagingSenderId: "777075645270",
    appId: "1:777075645270:web:bd94ea846ee7f5f2b514f7"
  };

const app=firebase.initializeApp(config);

export const auth=app.auth();
export const database =app.database();
// for storing canvas (pic)
export const storage =app.storage();
