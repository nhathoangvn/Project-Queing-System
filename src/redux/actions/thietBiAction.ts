type loadData = {
  type: "LOAD_DATA";
  payload: any;
};
type getData = {
  type: "GET_DATA";
  payload: any;
};
type updateData = {
  type: "UPDATE_DATA";
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
type filterOnchange = {
  type: "FILTER_ONCHANGE";
  payload: any;
};
type statusWorkFilterChange = {
  type: "STATUSWORK_FILTER_CHANGE";
  payload: any;
};
type statusConnectionFilterChange = {
  type: "STATUSCONNECTION_FILTER_CHANGE";
  payload: any;
};
export type thietBiAction =
  | loadData
  | updateData
  | selectedItem
  | getData
  | addItem
  | filterOnchange
  | statusWorkFilterChange
  | statusConnectionFilterChange;
