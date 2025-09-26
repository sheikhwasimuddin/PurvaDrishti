import { initializeApp } from "firebase/app";
import { 
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut
} from "firebase/auth";
import { 
  getFirestore,
  doc,
  getDoc,
  setDoc
} from "firebase/firestore";

// Your web app's Firebase configuration
// IMPORTANT: For production, use environment variables to hide these keys.
const firebaseConfig = { 
  apiKey: "AIzaSyC3B-p-S1pETTBKTFoh0I97QPgY9JMrpHY", 
  authDomain: "purvadristi.firebaseapp.com", 
  projectId: "purvadristi", 
  storageBucket: "purvadristi.appspot.com", 
  messagingSenderId: "176453098583", 
  appId: "1:176453098583:web:d72c0a015ba9f1d6589712" 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);

// Setup Google Provider
const googleProvider = new GoogleAuthProvider();

/**
 * Signs in the user with Google and creates a user document in Firestore
 * if one doesn't already exist.
 */
export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;
    const userDocRef = doc(db, "users", user.uid);
    const userDocSnap = await getDoc(userDocRef);

    // If the user is new, create a new document for them in the 'users' collection
    if (!userDocSnap.exists()) {
      const nameParts = user.displayName ? user.displayName.split(" ") : ["", ""];
      const firstName = nameParts[0];
      const lastName = nameParts.slice(1).join(" ");

      await setDoc(userDocRef, {
        firstName: firstName,
        lastName: lastName,
        email: user.email,
        role: 'user',       // Default role for new users
        siteLocation: ''    // Default empty site location
      });
    }
    return user;
  } catch (error) {
    console.error("Error during Google sign-in:", error);
    // Handle specific errors, e.g., popup closed by user
    if (error.code === 'auth/popup-closed-by-user') {
      return null;
    }
    throw error;
  }
};

/**
 * Signs out the current user.
 */
export const logout = () => {
  return signOut(auth);
};