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
type updateItem = {
  type: "UPDATE_ITEM";
  payload: any;
};
type filterOnChange = {
  type: "FILTER_ONCHANGE";
  payload: any;
};
export type vaiTroAction =
  | loadData
  | selectedItem
  | addItem
  | updateItem
  | filterOnChange;
