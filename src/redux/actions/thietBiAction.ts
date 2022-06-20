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
export type thietBiAction =
  | loadData
  | updateData
  | selectedItem
  | getData
  | addItem;
