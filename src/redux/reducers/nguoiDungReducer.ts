import { nguoiDungAction } from "../actions/nguoiDungAction";

const initialState = {
  nguoiDungList: [],
  filter: {
    searchText: "",
  },
};
const nguoiDungReducer = (
  state: any = initialState,
  action: nguoiDungAction
) => {
  switch (action.type) {
    case "LOAD_DATA": {
      state.nguoiDungList = action.payload.docs.map((doc: any) => ({
        ...doc.data(),
        id: doc.id,
        key: doc.id,
      }));
      return { ...state };
    }
    case "FILTER_BY_SEARCHTEXT": {
      return {
        ...state,
        filter: {
          searchText: action.payload,
        },
      };
    }
    default:
      return state;
  }
};
export default nguoiDungReducer;
