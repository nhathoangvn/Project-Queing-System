import { createSelector } from "reselect";
import { state } from "../reducers";

export const taiKhoanListSelector = (state: state) =>
  state.taikhoan.taiKhoanList;
export const filterBySearchTextSelector = (state: state) =>
  state.taikhoan.filter.searchText;
export const filterByRoleSelector = (state: state) =>
  state.taikhoan.filter.role;

export const taiKhoanListRemainingSelector = createSelector(
  taiKhoanListSelector,
  filterByRoleSelector,
  filterBySearchTextSelector,
  (list: [], role, searchText) => {
    return list.filter((item: any) => {
      return (
        item.hoten?.toLowerCase()?.includes(searchText?.toLowerCase()) &&
        (role !== "tatCa"
          ? item.vaitro?.includes(role)
          : item.hoten?.toLowerCase()?.includes(searchText?.toLowerCase()))
      );
    });
  }
);
