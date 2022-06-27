type loadData = {
  type: "LOAD_DATA";
  payload: any;
};
type filterBySearchText = {
  type: "FILTER_BY_SEARCHTEXT";
  payload: string;
};
export type nguoiDungAction = loadData | filterBySearchText;
