import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBPET4623nvyVRVcACU9bj1z-T1OoZYqkE",
    authDomain: "nubank-reactnative.firebaseapp.com",
    projectId: "nubank-reactnative",
    storageBucket: "nubank-reactnative.appspot.com",
    messagingSenderId: "223944815353",
    appId: "1:223944815353:web:ec9024cfe64d9b70f4a828",
    measurementId: "G-V95K9E28Y7"
  };

  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
  }

export default firebase 