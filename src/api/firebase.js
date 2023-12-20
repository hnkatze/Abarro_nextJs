
import { initializeApp } from "firebase/app";
import { getFirestore } from'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCBl_fNZ_9NUD7G3gUVr3iunyjQ9WswRNs",
  authDomain: "educaplushn.firebaseapp.com",
  databaseURL: "https://educaplushn-default-rtdb.firebaseio.com",
  projectId: "educaplushn",
  storageBucket: "educaplushn.appspot.com",
  messagingSenderId: "868905502738",
  appId: "1:868905502738:web:94c7520611a86853d330cb",
  measurementId: "G-Z6QG37SC5W"
};

const app = initializeApp(firebaseConfig);
export const datab = getFirestore(app);

