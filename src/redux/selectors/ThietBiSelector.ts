import { createSelector } from "reselect";
import { state } from "../reducers";
export const thietBiSelector = (state: state) => state.thietbi.thietBiList;
export const searchTextSelector = (state: state) =>
  state.thietbi.filter.searchText;
export const statusConnectionSelector = (state: state) =>
  state.thietbi.filter.statusConnection;
export const statusWorkFilterSelector = (state: state) =>
  state.thietbi.filter.statusWork;
export const thietBiRemainingSelector = createSelector(
  thietBiSelector,
  statusConnectionSelector,
  statusWorkFilterSelector,
  searchTextSelector,
  (list, statusConnection, statusWork, searchText) => {
    return list.filter((item: any) => {
      if (statusWork === "tatCa" && statusConnection === "tatCa") {
        return item.deviceName?.includes(searchText);
      }
      if (statusConnection === "tatCa" && statusWork !== "tatCa") {
        return (
          item.deviceName?.includes(searchText) &&
          (statusWork === true ? item.statusWork : !item.statusWork)
        );
      }
      if (statusWork === "tatCa" && statusConnection !== "tatCa") {
        return (
          item.deviceName?.includes(searchText) &&
          (statusConnection === true
            ? item.statusConnection
            : !item.statusConnection)
        );
      }
      return (
        item.deviceName?.includes(searchText) &&
        (statusWork === true ? item.statusWork : !item.statusWork) &&
        (statusConnection === true
          ? item.statusConnection
          : !item.statusConnection)
      );
    });
  }
);
