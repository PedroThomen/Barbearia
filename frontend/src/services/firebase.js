import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCjQ4-VMpKz5rMXwiBvvRYdeJGVCUS30SU",
  authDomain: "projeto-barbearia-49fc6.firebaseapp.com",
  projectId: "projeto-barbearia-49fc6",
  storageBucket: "projeto-barbearia-49fc6.appspot.com",
  messagingSenderId: "847828199008",
  appId: "1:847828199008:web:62c9fafda3fbe0b0228505"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app; 