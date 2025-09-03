// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAnalytics,
  isSupported as isAnalyticsSupported,
} from "firebase/analytics";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
  OAuthProvider,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQJfSMb1JjyIkFmGdPTrql1aE302O6BSM",
  authDomain: "komplex-a9ff5.firebaseapp.com",
  projectId: "komplex-a9ff5",
  storageBucket: "komplex-a9ff5.firebasestorage.app",
  messagingSenderId: "711155458274",
  appId: "1:711155458274:web:f3a907bed5b9d661db3ebb",
  measurementId: "G-NRP2WJGHQQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics (guard for non-browser environments)
let analytics: ReturnType<typeof getAnalytics> | undefined;
if (typeof window !== "undefined") {
  // getAnalytics throws if not supported (e.g., SSR); check support first
  isAnalyticsSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

// Initialize Auth and providers
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
// Microsoft via generic OAuth provider
const microsoftProvider = new OAuthProvider("microsoft.com");

export {
  app,
  analytics,
  auth,
  googleProvider,
  facebookProvider,
  microsoftProvider,
};
