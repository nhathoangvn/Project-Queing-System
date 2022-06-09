import { initializeApp } from "@firebase/app";
import "firebase/auth";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import "firebase/firestore";
import config from "./config";

export const Providers = {
  google: new GoogleAuthProvider(),
};

const app = initializeApp(config.firebase);
export const auth = getAuth(app);
export default app;
