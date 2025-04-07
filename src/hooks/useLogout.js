import { signOut } from "firebase/auth";
import { auth } from "../firebase/config";
import { useState } from "react";
import { useGlobalContext } from "./useGlobalContext";
import toast from "react-hot-toast";
import { useFirestore } from "./useFirestore";

export const useLogout = () => {
  const { dispatch, user } = useGlobalContext();
  const [isPending, setIsPending] = useState(false);
  const { updateDocument } = useFirestore("users");

  const logout = async () => {
    try {
      updateDocument(user.uid, {
        online: false,
      });
      setIsPending(true);
      await signOut(auth);
      dispatch({ type: "LOGOUT" });
      toast.success("See you soon");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setIsPending(false);
    }
  };

  return { logout, isPending };
};
