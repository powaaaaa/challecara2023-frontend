// Import the functions you need from the SDKs you need
import { getAnalytics, isSupported } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAZUrkcGbmCctmR8B6oCgoPVVHdRfSjpWw',
  authDomain: 'open-gift-7f6f3.firebaseapp.com',
  projectId: 'open-gift-7f6f3',
  storageBucket: 'open-gift-7f6f3.appspot.com',
  messagingSenderId: '225200388482',
  appId: '1:225200388482:web:b187606ce1c2eef514379b',
  measurementId: 'G-49PMK5M6G3',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = isSupported().then((yes) => (yes ? getAnalytics(app) : null));
// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);

export { app, analytics, storage };
