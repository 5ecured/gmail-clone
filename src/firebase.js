import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDiqQpMV92zxbzRMYOs7siXsgSu4BuWDNY",
    authDomain: "clone-4bfc7.firebaseapp.com",
    projectId: "clone-4bfc7",
    storageBucket: "clone-4bfc7.appspot.com",
    messagingSenderId: "1016190245688",
    appId: "1:1016190245688:web:2f31c8590d00b9794d3fcd"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, provider }