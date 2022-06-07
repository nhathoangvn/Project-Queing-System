import { initializeApp } from "@firebase/app";
import "firebase/auth";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import "firebase/firestore";
import config from "./config";

const Firebase = initializeApp(config.firebase);

export const Providers = {
  google: new GoogleAuthProvider(),
};
export const auth = getAuth();
export default Firebase;
