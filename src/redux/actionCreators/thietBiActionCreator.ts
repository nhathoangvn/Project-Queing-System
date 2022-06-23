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
import { IDevice } from "../../types/TypeDevice";
import { thietBiAction } from "../actions/thietBiAction";

export const loadData = () => async (dispatch: Dispatch<thietBiAction>) => {
  try {
    const deviceCollectionRef = collection(db, "thietbi");
    const data = await getDocs(deviceCollectionRef);
    dispatch({
      type: "LOAD_DATA",
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const selectedItem =
  (id: string) => async (dispatch: Dispatch<thietBiAction>) => {
    const docRef = doc(db, "thietbi", id);
    const docSnap = await getDoc(docRef);
    try {
      dispatch({
        type: "SELECTED_ITEM",
        payload: docSnap.data(),
      });
    } catch (error) {
      console.log(error);
    }
  };
export const updateItem =
  (id: string, device: IDevice) =>
  async (dispatch: Dispatch<thietBiAction>) => {
    try {
      const docRef = doc(db, "thietbi", id);
      const data = await setDoc(docRef, device);
      dispatch({
        type: "UPDATE_DATA",
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };

export const addItem =
  (device: IDevice) => async (dispatch: Dispatch<thietBiAction>) => {
    try {
      const deviceCollectionRef = collection(db, "thietbi");
      const data = await addDoc(deviceCollectionRef, device);
      dispatch({
        type: "ADD_ITEM",
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };

export const filterOnChange =
  (search: string) => async (dispatch: Dispatch<thietBiAction>) => {
    try {
      dispatch({
        type: "FILTER_ONCHANGE",
        payload: search,
      });
    } catch (error) {
      console.log(error);
    }
  };
export const statusWorkFilterChange =
  (statusWork: any) => async (dispatch: Dispatch<thietBiAction>) => {
    try {
      dispatch({
        type: "STATUSWORK_FILTER_CHANGE",
        payload: statusWork,
      });
    } catch (error) {
      console.log(error);
    }
  };
export const statusConnectionFilterChange =
  (status: any) => async (dispatch: Dispatch<thietBiAction>) => {
    try {
      dispatch({
        type: "STATUSCONNECTION_FILTER_CHANGE",
        payload: status,
      });
    } catch (error) {
      console.log(error);
    }
  };
