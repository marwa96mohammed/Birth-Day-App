  // Import the functions you need from the SDKs you need
  // this link for the app module
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
  //this is for the auth module
  import {getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword,signOut  } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js"
  //this is for database module
  import { getDatabase ,set,ref,get,child} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCKdmVlfmO1YxI5Hs7Qj6lFqz7A4iWeksc",
    authDomain: "birthday-calculation.firebaseapp.com",
    databaseURL: "https://birthday-calculation-default-rtdb.firebaseio.com",
    projectId: "birthday-calculation",
    storageBucket: "birthday-calculation.appspot.com",
    messagingSenderId: "763190532767",
    appId: "1:763190532767:web:79025d9852482bc24fa0aa",
    measurementId: "G-56PMSCLEFE"
  };


  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth()
  const db = getDatabase(app);
  export{auth,createUserWithEmailAndPassword, signInWithEmailAndPassword,signOut,db ,set,ref,get,child}

