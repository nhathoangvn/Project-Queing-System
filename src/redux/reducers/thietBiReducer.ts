import { thietBiAction } from "../actions/thietBiAction";

const initialState = {
  thietBiData: {},
  thietBiList: [],
  thietBiInfo: {},
  thietBiFilter: [],
  filter: {
    searchText: "",
    statusWork: "tatCa",
    statusConnection: "tatCa",
  },
};
const thietBiReducer = (state: any = initialState, action: thietBiAction) => {
  switch (action.type) {
    case "LOAD_DATA": {
      state.thietBiData = action.payload;
      state.thietBiList = state.thietBiData.docs.map((doc: any) => ({
        ...doc.data(),
        id: doc.id,
      }));
      return { ...state };
    }
    case "SELECTED_ITEM": {
      state.thietBiInfo = action.payload;
      return { ...state };
    }
    case "UPDATE_DATA": {
      return { ...state };
    }
    case "ADD_ITEM": {
      return { ...state };
    }
    case "FILTER_ONCHANGE": {
      return {
        ...state,
        filter: {
          ...state.filter,
          searchText: action.payload,
        },
      };
    }
    case "STATUSWORK_FILTER_CHANGE": {
      return {
        ...state,
        filter: {
          ...state.filter,
          statusWork: action.payload,
        },
      };
    }
    case "STATUSCONNECTION_FILTER_CHANGE": {
      return {
        ...state,
        filter: {
          ...state.filter,
          statusConnection: action.payload,
        },
      };
    }
    default:
      return state;
  }
};
export default thietBiReducer;
