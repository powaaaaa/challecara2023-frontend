// Import the functions you need from the SDKs you need
import { getAnalytics, isSupported } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCN5Z8TyIEby6cKsX9taw0kZdlj1owM8cU',
  authDomain: 'challecara2023-frontend.firebaseapp.com',
  projectId: 'challecara2023-frontend',
  storageBucket: 'challecara2023-frontend.appspot.com',
  messagingSenderId: '680545801905',
  appId: '1:680545801905:web:1a6c4eea91826f7b737490',
  measurementId: 'G-V0XWZ99JVY',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = isSupported().then((yes) => (yes ? getAnalytics(app) : null));
// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);

export { app, analytics, storage };
