import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: 'AIzaSyD9R6QTYEt7v3QmvqpEGxViKLmHYY9aSoU',
  authDomain: "ambl-app.firebaseapp.com",
  projectId: "ambl-app",
  storageBucket: "ambl-app.appspot.com",
  messagingSenderId: "657295222550",
  appId: "1:657295222550:web:07e2ebc1566578cc71d237"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);