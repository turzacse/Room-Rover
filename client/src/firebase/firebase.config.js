import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAteZvSJdgv8yt1apSqP40AiuKnai87Dfg",
  authDomain: "room-roverr.firebaseapp.com",
  projectId: "room-roverr",
  storageBucket: "room-roverr.appspot.com",
  messagingSenderId: "304346332602",
  appId: "1:304346332602:web:b5709fc29088343cc8f183"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);