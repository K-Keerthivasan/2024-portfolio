import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { firebaseEnvConfig } from "../config/env";

const app = initializeApp(firebaseEnvConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db, analytics };
