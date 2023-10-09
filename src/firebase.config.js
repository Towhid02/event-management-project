import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxUucw9xFFSs3inlFicw2-v0f33DfzD9c",
  authDomain: "event-planner-13da2.firebaseapp.com",
  projectId: "event-planner-13da2",
  storageBucket: "event-planner-13da2.appspot.com",
  messagingSenderId: "727118408931",
  appId: "1:727118408931:web:253461b50c146a03e0e9d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app