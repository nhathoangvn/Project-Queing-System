import { createSelector } from "reselect";
import { state } from "../reducers";

export const dichVuListSelector = (state: state) => state.dichvu.dichVuList;
export const searchTextSelector = (state: state) =>
  state.dichvu.filter.searchText;
export const statusWorkFilterSelector = (state: state) =>
  state.dichvu.filter.statusWork;

export const dichVuRemainingSelector = createSelector(
  dichVuListSelector,
  statusWorkFilterSelector,
  searchTextSelector,
  (list: [], statusWork, searchText) => {
    return list.filter((item: any) => {
      if (statusWork === "tatCa") {
        return item.serviceName?.includes(searchText);
      }
      return (
        item.serviceName?.includes(searchText) &&
        (statusWork === true ? item.statusWork : !item.statusWork)
      );
    });
  }
);
