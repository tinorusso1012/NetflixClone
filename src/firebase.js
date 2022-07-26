// Import the functions you need from the SDKs you need
import firebase from "firebase"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlx-CP3_evkx0Xjzd7S-AIic0pUMVxbok",
  authDomain: "oriflix.firebaseapp.com",
  projectId: "oriflix",
  storageBucket: "oriflix.appspot.com",
  messagingSenderId: "841850121355",
  appId: "1:841850121355:web:9de20553b6d9178830788e"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()
export {auth}