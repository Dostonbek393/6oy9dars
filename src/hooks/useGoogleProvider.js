import { auth, db } from "../firebase/config";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useGlobalContext } from "./useGlobalContext";
import { useState } from "react";
import toast from "react-hot-toast";
import { doc, setDoc } from "firebase/firestore";

export const useGoogleProvider = () => {
  const { dispatch } = useGlobalContext();
  const [isPending, setIsPending] = useState(false);
  const [data, setData] = useState(null);

  const googlProvider = async () => {
    try {
      setIsPending(true);
      const provider = new GoogleAuthProvider();
      const req = await signInWithPopup(auth, provider);
      const user = req.user;
      await setDoc(doc(db, "users", user.uid), {
        displayName: user.displayName,
        photoURL: user.photoURL,
        online: true,
      });
      dispatch({ type: "LOGIN", payload: user });
      setData(user);
      toast.success(`Welcome ${user.displayName}`);
    } catch (error) {
      toast.error(error.message);
      console.log(error.message);
    } finally {
      setIsPending(false);
    }
  };

  return { isPending, data, googlProvider };
};
