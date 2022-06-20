import { useEffect } from "react";
import { taiKhoanAction } from "../actions/taiKhoanAction";

let currentUser = null;
if (localStorage.getItem("currentUser")) {
  currentUser = JSON.parse(localStorage.getItem("currentUser") || "");
}

const initialState = {
  taiKhoanData: {},
  taiKhoanInfo: {},
  statusLogin: false,
  confirmEmail: false,
  taiKhoanList: [],
  taiKhoanLogin: currentUser,
};
const taiKhoanReducer = (state: any = initialState, action: taiKhoanAction) => {
  switch (action.type) {
    case "LOAD_DATA": {
      state.taiKhoanData = action.payload;
      state.taiKhoanList = state.taiKhoanData.docs.map((doc: any) => ({
        ...doc.data(),
        id: doc.id,
      }));

      return { ...state };
    }

    case "GET_DATA": {
      const data = state.taiKhoanData.docs.filter(
        (doc: any) => doc._document.key.path.segments[6] === action.payload
      );
      state.taiKhoanInfo = data;
      return { ...state };
    }
    case "LOGIN": {
      const result = state.taiKhoanList.filter(
        (item: any) =>
          item.tendangnhap === action.payload.tendangnhap &&
          item.matkhau === action.payload.matkhau
      );
      if (result[0].tendangnhap !== undefined) {
        state.statusLogin = true;
        localStorage.setItem("accessToken", result[0].id);
        localStorage.setItem("currentUser", JSON.stringify(result));
      }
      return { ...state };
    }
    case "SIGN_IN": {
      state.statusLogin = action.payload;
      localStorage.setItem("auth", state.statusLogin);
      return { ...state };
    }
    default:
      return state;
  }
};
export default taiKhoanReducer;
