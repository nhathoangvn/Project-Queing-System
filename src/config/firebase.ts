import { initializeApp } from "@firebase/app";
import "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import config from "./config";

export const Providers = {
  google: new GoogleAuthProvider(),
};

const app = initializeApp(config.firebase);

export const db = getFirestore(app);
