import { useEffect } from "react";
import { taiKhoanAction } from "../actions/taiKhoanAction";

let currentUser = null;
if (localStorage.getItem("currentUser")) {
  currentUser = JSON.parse(localStorage.getItem("currentUser") || "");
}

const initialState = {
  taiKhoanInfo: {},
  statusLogin: false,
  confirmEmail: false,
  taiKhoanList: [],
  taiKhoanLogin: currentUser,
  taiKhoanSelected: {},
  filter: {
    searchText: "",
    role: "tatCa",
  },
};
const taiKhoanReducer = (state: any = initialState, action: taiKhoanAction) => {
  switch (action.type) {
    case "LOAD_DATA": {
      state.taiKhoanList = action.payload.docs.map((doc: any) => ({
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
    case "FILTER_BY_ROLE": {
      return {
        ...state,
        filter: {
          ...state.filter,
          role: action.payload,
        },
      };
    }
    case "FILTER_BY_SEARCHTEXT": {
      return {
        ...state,
        filter: {
          ...state.filter,
          searchText: action.payload,
        },
      };
    }
    case "CHECK_MAIL": {
      const checkEmail = state.taiKhoanList.filter((item: any) =>
        item.email?.includes(action.payload)
      );
      if (checkEmail[0].email !== undefined) {
        state.confirmEmail = true;
      }
      return { ...state };
    }
    case "UPDATE_ACCOUNT": {
      return { ...state };
    }
    case "ADD_ACCOUNT": {
      return { ...state };
    }
    case "SELECTED_ACCOUNT": {
      state.taiKhoanSelected = action.payload;
      return { ...state };
    }
    default:
      return state;
  }
};
export default taiKhoanReducer;
