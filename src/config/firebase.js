import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyB_d5UTrT62B6R8hExmXWw3rJIRLsPfW3M",
    authDomain: "proyecto-react1.firebaseapp.com",
    databaseURL: "https://proyecto-react1.firebaseio.com",
    projectId: "proyecto-react1",
    storageBucket: "",
    messagingSenderId: "453261296874"
};
const fire = firebase.initializeApp(config);
export default firebase;