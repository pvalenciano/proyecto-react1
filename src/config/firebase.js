import firebase from 'firebase';

export const config = {
    apiKey: "AIzaSyB_d5UTrT62B6R8hExmXWw3rJIRLsPfW3M",
    authDomain: "proyecto-react1.firebaseapp.com",
    databaseURL: "https://proyecto-react1.firebaseio.com",
    projectId: "proyecto-react1",
    storageBucket: "",
    messagingSenderId: "453261296874"
};
export const conf= firebase.initializeApp(config);
export default firebase;