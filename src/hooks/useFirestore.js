import {
  collection,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { useEffect, useState, useReducer } from "react";
import { db } from "../firebase/config";
import toast from "react-hot-toast";

const initialState = {
  isPending: false,
  error: null,
  success: true,
  data: null,
};

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "IS_PENDING":
      return { isPending: true, error: null, success: true, data: null };
    case "ERROR":
      return { isPending: false, error: payload, success: false, data: null };
    case "SUCCESS":
      return { isPending: false, error: null, success: true, data: payload };
    default:
      return state;
  }
};

export const useFirestore = (c) => {
  const [isCenceled, setISCenceled] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);

  const checkCenceled = (action) => {
    if (!isCenceled) {
      dispatch(action);
    }
  };

  const addDocument = async (data) => {
    try {
      checkCenceled({ type: "IS_PENDING", payload: true });
      const res = await addDoc(collection(db, c), data);
      checkCenceled({ type: "SUCCESS", payload: res });
      toast.success("SUCCESS");
    } catch (error) {
      checkCenceled({ type: "ERROR", payload: error.message });
      toast.error(error.message);
    } finally {
      checkCenceled({ type: "IS_PENDING", payload: false });
    }
  };

  const updateDocument = async (id, data) => {
    const ref = doc(db, c, id);

    try {
      checkCenceled({ type: "IS_PENDING", payload: true });
      const res = await updateDoc(ref, data);
      toast.success("SUCCESS");
      checkCenceled({ type: "SUCCESS", payload: res });
    } catch (error) {
      checkCenceled({ type: "ERROR", payload: error.message });
      toast.error(error.message);
    } finally {
      checkCenceled({ type: "IS_PENDING", payload: false });
    }
  };

  const deleteDocument = async (id) => {
    try {
      checkCenceled({ type: "IS_PENDING", payload: true });
      await deleteDoc(doc(db, c, id));
      toast.success("SUCCESS");
    } catch (error) {
      checkCenceled({ type: "ERROR", payload: error.message });
      toast.error(error.message);
    } finally {
      checkCenceled({ type: "IS_PENDING", payload: false });
    }
  };

  useEffect(() => {
    return () => setISCenceled(true);
  }, []);

  return { ...state, updateDocument, deleteDocument, addDocument };
};
