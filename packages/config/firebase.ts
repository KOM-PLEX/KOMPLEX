import { initializeApp, type FirebaseApp } from "firebase/app";
import {
  getAnalytics,
  isSupported as isAnalyticsSupported,
  type Analytics,
} from "firebase/analytics";
import {
  getAuth,
  GoogleAuthProvider,
  OAuthProvider,
  GithubAuthProvider,
  type Auth,
} from "firebase/auth";

export type FirebaseConfig = {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId?: string;
};

export const createFirebase = (config: FirebaseConfig) => {
  const app: FirebaseApp = initializeApp(config);

  // Analytics (browser-only, safe-guarded)
  let analytics: Analytics | undefined;
  if (typeof window !== "undefined") {
    isAnalyticsSupported().then((supported) => {
      if (supported) {
        analytics = getAnalytics(app);
      }
    });
  }

  // Auth and providers
  const auth: Auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const microsoftProvider = new OAuthProvider("microsoft.com");

  return {
    app,
    analytics,
    auth,
    googleProvider,
    githubProvider,
    microsoftProvider,
  };
};
