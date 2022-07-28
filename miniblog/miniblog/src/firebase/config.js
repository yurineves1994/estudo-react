import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDKmlPQDb8ncF5dqoN75DJolnnGMYKjFXg",
    authDomain: "miniblog-cb944.firebaseapp.com",
    projectId: "miniblog-cb944",
    storageBucket: "miniblog-cb944.appspot.com",
    messagingSenderId: "830585382166",
    appId: "1:830585382166:web:fbcea21f968dc60e659c37"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db };