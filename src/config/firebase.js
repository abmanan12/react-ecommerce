import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBk72lDps7uWV_LtOowgBLVOIqKcd5grrw",
    authDomain: "ecommerce-app-a0516.firebaseapp.com",
    projectId: "ecommerce-app-a0516",
    storageBucket: "ecommerce-app-a0516.appspot.com",
    messagingSenderId: "1030570054594",
    appId: "1:1030570054594:web:a56493a8d594d92451fc5b",
    measurementId: "G-12YMT2C8QE"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { analytics, auth }