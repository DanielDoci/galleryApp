// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
import {getAuth} from 'firebase/auth';

  const firebaseConfig = {
    apiKey: "AIzaSyBfKRUJTZSsOjnEGZq__gJQQR0aqCiNCCc",
    authDomain: "fir-react-gallery-baae8.firebaseapp.com",
    projectId: "fir-react-gallery-baae8",
    storageBucket: "fir-react-gallery-baae8.appspot.com",
    messagingSenderId: "642506521009",
    appId: "1:642506521009:web:7186305ad1e94654b3a590"
  };

  export const app = initializeApp(firebaseConfig);
  export const storage = getStorage();
  export const db = getFirestore();
  export const auth = getAuth();