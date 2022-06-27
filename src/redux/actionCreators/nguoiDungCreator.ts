import { collection, getDocs } from "firebase/firestore";
import { Dispatch } from "react";
import { db } from "../../config/firebase";
import { nguoiDungAction } from "../actions/nguoiDungAction";

export const loadDataNguoiDung =
  () => async (dispatch: Dispatch<nguoiDungAction>) => {
    try {
      const nguoiDungCollectionRef = collection(db, "nguoidung");
      const data = await getDocs(nguoiDungCollectionRef);
      dispatch({
        type: "LOAD_DATA",
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
export const filterBySearchText =
  (searchText: string) => async (dispatch: Dispatch<nguoiDungAction>) => {
    try {
      dispatch({
        type: "FILTER_BY_SEARCHTEXT",
        payload: searchText,
      });
    } catch (error) {
      console.log(error);
    }
  };
