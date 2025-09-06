import axios from "axios";
import { auth } from "@/config/firebase";
import { onAuthStateChanged, type User as FirebaseUser } from "firebase/auth";

const api = axios.create({
  baseURL: "http://localhost:6969", // ! TO CHANGE TO PRODUCTION URL
});

// Attach Firebase ID token to every request
api.interceptors.request.use(async (config) => {
  const firebaseUser = await new Promise<FirebaseUser | null>((resolve) => {
    if (auth.currentUser) {
      resolve(auth.currentUser);
      return;
    }
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      unsubscribe();
      resolve(u);
    });
  });

  if (!firebaseUser) {
    throw new Error("No authenticated Firebase user");
  }

  const idToken = await firebaseUser.getIdToken();

  config.headers.Authorization = `Bearer ${idToken}`;

  return config;
});

export default api;
