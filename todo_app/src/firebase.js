import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDPS5hxff0jd_pxq1Lbp9m2ng3k7xsSias",
    authDomain: "todo-app-cs-34a7f.firebaseapp.com",
    databaseURL: "https://todo-app-cs-34a7f.firebaseio.com",
    projectId: "todo-app-cs-34a7f",
    storageBucket: "todo-app-cs-34a7f.appspot.com",
    messagingSenderId: "217332115205",
    appId: "1:217332115205:web:a58a75aaa473fc183bf96c",
    measurementId: "G-TELF2VRG5Q"
});

const db = firebaseApp.firestore();

export default db;