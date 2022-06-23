type loadData = {
  type: "LOAD_DATA";
  payload: any;
};
type selectedItem = {
  type: "SELECTED_ITEM";
  payload: any;
};
type addItem = {
  type: "ADD_ITEM";
  payload: any;
};
type filterBySearchtext = {
  type: "FILTER_BY_SEARCHTEXT";
  payload: any;
};
type filterByServiceName = {
  type: "FILTER_BY_SERVICENAME";
  payload: any;
};
type filterByStatus = {
  type: "FILTER_BY_STATUS";
  payload: any;
};
type filterBySource = {
  type: "FILTER_BY_SOURCE";
  payload: any;
};
export type capSoAction =
  | loadData
  | selectedItem
  | addItem
  | filterBySearchtext
  | filterByServiceName
  | filterBySource
  | filterByStatus;
