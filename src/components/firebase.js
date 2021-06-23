import  firebase  from 'firebase/app';
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyAvfP9eKFiPgZbZC3T1SYK-jROF_TOj3nU",
    authDomain: "chats-966e4.firebaseapp.com",
    projectId: "chats-966e4",
    storageBucket: "chats-966e4.appspot.com",
    messagingSenderId: "1027314746693",
    appId: "1:1027314746693:web:ed5462a7258747e418ea2c"
  }).auth();