type loadData = {
  type: "LOAD_DATA";
  payload: any;
};
type addItem = {
  type: "ADD_ITEM";
  payload: any;
};
type selectedItem = {
  type: "SELECTED_ITEM";
  payload: any;
};
type updateItem = {
  type: "UPDATE_ITEM";
  payload: any;
};
type filterOnChange = {
  type: "FILTER_ONCHANGE";
  payload: any;
};
type statusWorkFilterChange = {
  type: "STATUSWORK_FILTER_ONCHANGE";
  payload: any;
};
export type dichVuAction =
  | filterOnChange
  | statusWorkFilterChange
  | updateItem
  | loadData
  | addItem
  | selectedItem;
