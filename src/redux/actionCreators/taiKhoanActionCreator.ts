import { db } from "../../config/firebase";
import { Dispatch } from "redux";
import { collection, getDocs } from "firebase/firestore";
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
