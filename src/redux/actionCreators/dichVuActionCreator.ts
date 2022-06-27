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
import { IService } from "../../types/TypeService";
import { dichVuAction } from "../actions/dichVuAction";

export const loadDataService =
  () => async (dispatch: Dispatch<dichVuAction>) => {
    try {
      const serviceCollectionRef = collection(db, "dichvu");
      const data = await getDocs(serviceCollectionRef);
      dispatch({
        type: "LOAD_DATA",
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
export const addItem =
  (service: IService) => async (dispatch: Dispatch<dichVuAction>) => {
    try {
      const seriviceCollectionRef = collection(db, "dichvu");
      const data = await addDoc(seriviceCollectionRef, service);
      dispatch({
        type: "ADD_ITEM",
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };

export const selectedItem =
  (id: string) => async (dispatch: Dispatch<dichVuAction>) => {
    try {
      const docRef = doc(db, "dichvu", id);
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
  (id: string, service: IService) =>
  async (dispatch: Dispatch<dichVuAction>) => {
    try {
      const docRef = doc(db, "dichvu", id);
      const data = await setDoc(docRef, service);
      dispatch({
        type: "UPDATE_ITEM",
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };

export const filterOnChange =
  (search: string) => async (dispatch: Dispatch<dichVuAction>) => {
    try {
      dispatch({
        type: "FILTER_ONCHANGE",
        payload: search,
      });
    } catch (error) {
      console.log(error);
    }
  };

export const statusWork =
  (statusWork: any) => async (dispatch: Dispatch<dichVuAction>) => {
    try {
      dispatch({
        type: "STATUSWORK_FILTER_ONCHANGE",
        payload: statusWork,
      });
    } catch (error) {
      console.log(error);
    }
  };
