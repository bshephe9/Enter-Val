import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyC39Tg6mBtYAMmd57SOJaRHM6KAqoEoZoI",
    authDomain: "enterval-db.firebaseapp.com",
    databaseURL: "https://enterval-db.firebaseio.com",
    projectId: "enterval-db",
    storageBucket: "",
    messagingSenderId: "529572747658"
};
const app = firebase.initializeApp(config);


export default app;