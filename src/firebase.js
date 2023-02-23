import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// // import { getFirestore } from "firebase/firestore";
// import "firebase/compat/storage";
import "firebase/compat/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyC6TBkYY7-Ko_Bn0LVzhrmxbit1VNNy2Y0",
//   authDomain: "linkedin-clone-ac956.firebaseapp.com",
//   projectId: "linkedin-clone-ac956",
//   storageBucket: "linkedin-clone-ac956.appspot.com",
//   messagingSenderId: "762247715577",
//   appId: "1:762247715577:web:03ddb3b73612767bd5a028",
// };

const firebaseConfig = {
  apiKey: "AIzaSyCokI6mCQgBfQCzC3TfVYUr_96Nqx2kBoQ",

  authDomain: "linkedin-6f5ed.firebaseapp.com",

  projectId: "linkedin-6f5ed",

  storageBucket: "linkedin-6f5ed.appspot.com",

  messagingSenderId: "711650872242",

  appId: "1:711650872242:web:d625cb83e7406fa71132ab",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
// // const provider = new firebase.auth.GoogleAuthProvider();
// // const storage = firebase.storage();

export { db, auth };
// export default db; /*, provider, storage */
