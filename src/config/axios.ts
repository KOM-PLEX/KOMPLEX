import axios from "axios";
import { auth } from "@/config/firebase";
import { onAuthStateChanged, type User as FirebaseUser } from "firebase/auth";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
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

  const idToken = firebaseUser ? await firebaseUser.getIdToken() : null;

  config.headers.Authorization = `Bearer ${idToken}`;

  return config;
});

export default api;
