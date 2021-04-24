import firebase from 'firebase'
import '@firebase/auth';
import '@firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyDMHz9g2I25EV71eZ6B3jus64dfwWOTJcE",
    authDomain: "ux308-exam.firebaseapp.com",
    projectId: "ux308-exam",
    storageBucket: "ux308-exam.appspot.com",
    messagingSenderId: "597993851755",
    appId: "1:597993851755:web:89c3b972a830e93e3d5a2e"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} 
export { firebase };