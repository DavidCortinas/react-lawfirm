import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBXwko7lNuef3M1BJ6NQWRew4l7orgQkGI",
    authDomain: "react-lawfirm.firebaseapp.com",
    databaseURL: "https://react-lawfirm-default-rtdb.firebaseio.com",
    projectId: "react-lawfirm",
    storageBucket: "react-lawfirm.appspot.com",
    messagingSenderId: "1025244106220",
    appId: "1:1025244106220:web:5200f62e50545b026c44c9",
    measurementId: "G-3V3BD12ZL2"
}

firebase.initializeApp(firebaseConfig);

export default firebase;