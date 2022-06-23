import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
} from "firebase/firestore";
import { Dispatch } from "react";
import { db } from "../../config/firebase";
import { vaiTroAction } from "../actions/vaiTroAction";

export const loadData = () => async (dispatch: Dispatch<vaiTroAction>) => {
  try {
    const roleCollectionRef = collection(db, "vaitro");
    const data = await getDocs(roleCollectionRef);
    dispatch({
      type: "LOAD_DATA",
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};
export const addItem =
  (role: any) => async (dispatch: Dispatch<vaiTroAction>) => {
    try {
      const roleCollectionRef = collection(db, "vaitro");
      const data = await addDoc(roleCollectionRef, role);
      dispatch({
        type: "ADD_ITEM",
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };

export const selectedItem =
  (id: string) => async (dispatch: Dispatch<vaiTroAction>) => {
    try {
      const docRef = doc(db, "vaitro", id);
      const docSnap = await getDoc(docRef);
      dispatch({
        type: "SELECTED_ITEM",
        payload: docSnap.data(),
      });
    } catch (error) {
      console.log(error);
    }
  };
export const updateItem =
  (id: string, role: any) => async (dispatch: Dispatch<vaiTroAction>) => {
    try {
      const docRef = doc(db, "vaitro", id);
      const data = await setDoc(docRef, role);
      dispatch({
        type: "UPDATE_ITEM",
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
export const filterOnChange =
  (searchText: string) => async (dispatch: Dispatch<vaiTroAction>) => {
    try {
      dispatch({
        type: "FILTER_ONCHANGE",
        payload: searchText,
      });
    } catch (error) {
      console.log(error);
    }
  };
