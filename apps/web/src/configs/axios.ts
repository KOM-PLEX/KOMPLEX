import { createApi } from "@core-configs/axios";
// apps/web/lib/api.ts
import { firebase } from "./firebase";

const getFirebaseToken = async () => {
  if (!firebase.auth.currentUser) return null;
  return await firebase.auth.currentUser.getIdToken();
};

export default createApi(
  process.env.NEXT_PUBLIC_API_URL!,
  getFirebaseToken
);
