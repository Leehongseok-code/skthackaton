import { initializeApp } from "firebase/app";
import { getAuth, signOut } from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getFirestore, collection, addDoc, getDocs, serverTimestamp } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDja8wn_WIL3OCtrGGg92P9gYtA3AGx-lQ",
    authDomain: "skthackaton-5ee5a.firebaseapp.com",
    projectId: "skthackaton-5ee5a",
    storageBucket: "skthackaton-5ee5a.appspot.com",
    messagingSenderId: "215406750352",
    appId: "1:215406750352:web:7e1f9c3a4f43195cb5c615",
    measurementId: "G-L8CCH5C6B4"  
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { storage, db, ref, uploadBytes, getDownloadURL, collection, addDoc, getDocs, app, auth, signOut, serverTimestamp };