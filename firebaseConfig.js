import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.messagingSenderId,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// android: 181775703147-srga3pksu42p6rf5k77rddni5qe49itd.apps.googleusercontent.com