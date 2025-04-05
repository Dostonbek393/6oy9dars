import { useState } from "react";
import { auth, db } from "../firebase/config";
import { signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import toast from "react-hot-toast";
import { useGlobalContext } from "./useGlobalContext";

import { doc, updateDoc } from "firebase/firestore";

export const useLogin = () => {
  const { dispatch } = useGlobalContext();
  const [isPending, setIsPending] = useState(false);
  const [data, setData] = useState(null);

  const login = async (email, password) => {
    try {
      setIsPending(true);
      const req = await signInWithEmailAndPassword(auth, email, password);
      const user = req.user;
      const useRef = doc(db, "users", user.uid);
      await updateDoc(useRef, {
        online: true,
      });
      toast.success(`Welcome come back, ${user.displayName}`);
      dispatch({ type: "LOGIN", payload: user });
      setData(user);
    } catch (error) {
      toast.error(error.message);
      console.log(error.message);
    } finally {
      setIsPending(false);
    }
  };

  return { isPending, data, login };
};
