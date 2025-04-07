import { useState } from "react";
import { auth, db } from "../firebase/config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import toast from "react-hot-toast";
import { useGlobalContext } from "./useGlobalContext";

import { doc, setDoc } from "firebase/firestore";

export const useRegister = () => {
  const { dispatch } = useGlobalContext();
  const [isPending, setIsPending] = useState(false);
  const [data, setData] = useState(null);

  const register = async (displayName, email, password) => {
    try {
      setIsPending(true);
      const req = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, {
        displayName,
        photoURL: `https://api.dicebear.com/9.x/adventurer/svg?seed=${displayName}`,
      });
      const user = req.user;
      await setDoc(doc(db, "users", user.uid), {
        displayName: user.displayName,
        photoURL: user.photoURL,
        online: true,
      });
      toast.success(`Welcome, ${displayName}`);
      dispatch({ type: "LOGIN", payload: user });
      setData(user);
    } catch (error) {
      toast.error(error.message);
      console.log("Login Error:", error.code, error.message);
    } finally {
      setIsPending(false);
    }
  };

  return { isPending, data, register };
};
