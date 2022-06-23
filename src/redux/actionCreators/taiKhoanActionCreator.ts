import { db } from "../../config/firebase";
import { Dispatch } from "redux";
import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { taiKhoanAction } from "../actions/taiKhoanAction";
export const loadData = () => async (dispatch: Dispatch<taiKhoanAction>) => {
  try {
    const userCollectionRef = collection(db, "taikhoan");
    const data = await getDocs(userCollectionRef);
    dispatch({
      type: "LOAD_DATA",
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getData =
  (id: string) => async (dispatch: Dispatch<taiKhoanAction>) => {
    try {
      dispatch({
        type: "GET_DATA",
        payload: `${id}`,
      });
    } catch (error) {
      console.log(error);
    }
  };

export const login =
  (tendangnhap: string, matkhau: string) =>
  async (dispatch: Dispatch<taiKhoanAction>) => {
    dispatch({
      type: "LOGIN",
      payload: {
        tendangnhap: tendangnhap,
        matkhau: matkhau,
      },
    });
  };
export const signin =
  (status: boolean) => async (dispatch: Dispatch<taiKhoanAction>) => {
    dispatch({
      type: "SIGN_IN",
      payload: status,
    });
  };
export const checkEmail =
  (email: string) => async (dispatch: Dispatch<taiKhoanAction>) => {
    try {
      dispatch({
        type: "CHECK_MAIL",
        payload: email,
      });
    } catch (error) {
      console.log(error);
    }
  };
export const filterBySearchText =
  (searchText: string) => async (dispatch: Dispatch<taiKhoanAction>) => {
    try {
      dispatch({
        type: "FILTER_BY_SEARCHTEXT",
        payload: searchText,
      });
    } catch (error) {
      console.log(error);
    }
  };
export const filterByRole =
  (role: any) => async (dispatch: Dispatch<taiKhoanAction>) => {
    try {
      dispatch({
        type: "FILTER_BY_ROLE",
        payload: role,
      });
    } catch (error) {
      console.log(error);
    }
  };
export const updateAccount =
  (id: string, account: any) => async (dispatch: Dispatch<taiKhoanAction>) => {
    try {
      const docRef = doc(db, "taikhoan", id);
      const data = await setDoc(docRef, account);
      dispatch({
        type: "UPDATE_ACCOUNT",
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
