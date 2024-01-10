import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAFW48Phw3Jr9M1BDpNXgMpB3RTLhcVwN8",
    authDomain: "mylove-2003-e8543.firebaseapp.com",
    projectId: "mylove-2003-e8543",
    storageBucket: "mylove-2003-e8543.appspot.com",
    messagingSenderId: "630057390662",
    appId: "1:630057390662:web:b2fae0abf5c0aee5553047",
    measurementId: "G-MKT0YYX21S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const imgDB = getStorage(app)
const txtDB = getFirestore(app)

export { imgDB, txtDB };
