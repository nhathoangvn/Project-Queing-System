import { combineReducers } from "redux";
import taiKhoanReducer from "./taiKhoanReducer";
import thietBiReducer from "./thietBiReducer";

const reducers = combineReducers({
  taikhoan: taiKhoanReducer,
  thietbi: thietBiReducer,
});
export default reducers;
export type state = ReturnType<typeof reducers>;
