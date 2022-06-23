import { createSelector } from "reselect";
import { state } from "../reducers";

export const capSoListSelector = (state: state) => state.capSo.capSoList;
export const filterBySearch = (state: state) => state.capSo.filter.searchText;
export const filterByStatus = (state: state) => state.capSo.filter.status;
export const filterByServiceName = (state: state) =>
  state.capSo.filter.serviceName;
export const filterBySource = (state: state) => state.capSo.filter.source;
export const capSoRemainingSelector = createSelector(
  capSoListSelector,
  filterByServiceName,
  filterBySearch,
  filterByStatus,
  filterBySource,
  (list, serviceName, searchText, status, source) => {
    return list.filter((item: any) => {
      return (
        (item.fullname?.toLowerCase()?.includes(searchText?.toLowerCase()) ||
          item.number?.toString()?.includes(searchText)) &&
        (serviceName !== "tatCa"
          ? item.serviceName?.includes(serviceName)
          : item.fullname?.toLowerCase()?.includes(searchText?.toLowerCase()) ||
            item.number?.toString()?.includes(searchText)) &&
        (status !== "tatCa"
          ? item.status?.includes(status)
          : item.fullname?.toLowerCase()?.includes(searchText?.toLowerCase()) ||
            item.number?.toString()?.includes(searchText)) &&
        (source !== "tatCa"
          ? item.source?.includes(source)
          : item.fullname?.toLowerCase()?.includes(searchText?.toLowerCase()) ||
            item.number?.toString()?.includes(searchText))
      );
    });
  }
);
