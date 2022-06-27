import { createSelector } from "reselect";
import { state } from "../reducers";

export const nguoiDungListSelector = (state: state) =>
  state.nguoidung.nguoiDungList;
export const filterBySearchTextSelector = (state: state) =>
  state.nguoidung.filter.searchText;
export const nguoiDungRemainingSelector = createSelector(
  nguoiDungListSelector,
  filterBySearchTextSelector,
  (list: any[], searchText: string) => {
    return list.filter((item: any) =>
      item.username?.toLowerCase()?.includes(searchText?.toLowerCase())
    );
  }
);
