import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'


const config = {
    apiKey: "AIzaSyCTPokq1yicV2aDLUtsfLYvheXs3624Jrw",
    authDomain: "cwrn-db-c575d.firebaseapp.com",
    databaseURL: "https://cwrn-db-c575d.firebaseio.com",
    projectId: "cwrn-db-c575d",
    storageBucket: "cwrn-db-c575d.appspot.com",
    messagingSenderId: "343769525761",
    appId: "1:343769525761:web:1e8a717f58e1f77b8a5a00",
    measurementId: "G-1DBEM4NC5D"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
