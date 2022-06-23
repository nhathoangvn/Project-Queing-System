import { addDoc, collection, doc, getDoc, getDocs } from "firebase/firestore";
import { Dispatch } from "react";
import { db } from "../../config/firebase";
import { capSoAction } from "../actions/capSoAction";

export const loadData = () => async (dispatch: Dispatch<capSoAction>) => {
  try {
    const provideNumberCollectionRef = collection(db, "capso");
    const data = await getDocs(provideNumberCollectionRef);
    dispatch({
      type: "LOAD_DATA",
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const addItem =
  (provideNumber: any) => async (dispatch: Dispatch<capSoAction>) => {
    try {
      const provideNumberCollectionRef = collection(db, "capso");
      const data = await addDoc(provideNumberCollectionRef, provideNumber);
      dispatch({
        type: "ADD_ITEM",
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
export const selectedItem =
  (id: string) => async (dispatch: Dispatch<capSoAction>) => {
    try {
      const docRef = doc(db, "capso", id);
      const docSnap = await getDoc(docRef);
      dispatch({
        type: "SELECTED_ITEM",
        payload: docSnap.data(),
      });
    } catch (error) {
      console.log(error);
    }
  };
export const filterBySearchText =
  (searchText: string) => async (dispatch: Dispatch<capSoAction>) => {
    try {
      dispatch({
        type: "FILTER_BY_SEARCHTEXT",
        payload: searchText,
      });
    } catch (error) {
      console.log(error);
    }
  };
export const filterByServiceName =
  (serviceName: any) => async (dispatch: Dispatch<capSoAction>) => {
    try {
      dispatch({
        type: "FILTER_BY_SERVICENAME",
        payload: serviceName,
      });
    } catch (error) {
      console.log(error);
    }
  };

export const filterByStatus =
  (status: any) => async (dispatch: Dispatch<capSoAction>) => {
    try {
      dispatch({
        type: "FILTER_BY_STATUS",
        payload: status,
      });
    } catch (error) {
      console.log(error);
    }
  };
export const filterBySource =
  (source: any) => async (dispatch: Dispatch<capSoAction>) => {
    try {
      dispatch({
        type: "FILTER_BY_SOURCE",
        payload: source,
      });
    } catch (error) {
      console.log(error);
    }
  };
