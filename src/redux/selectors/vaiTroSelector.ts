import { createSelector } from "reselect";
import { state } from "../reducers";

export const vaiTroListSelector = (state: state) => state.vaitro.vaiTroList;
export const filterOnChangeSelector = (state: state) =>
  state.vaitro.filter.searchText;

export const vaiTroRemainingSelector = createSelector(
  vaiTroListSelector,
  filterOnChangeSelector,
  (list: [], searchText) => {
    return list.filter((item: any) =>
      item.role?.toLowerCase()?.includes(searchText?.toLowerCase())
    );
  }
);
