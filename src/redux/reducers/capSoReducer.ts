import { capSoAction } from "../actions/capSoAction";

const initialState = {
  capSoList: [],
  capSoSelected: {},
  filter: {
    searchText: "",
    serviceName: "",
    status: "",
    source: "",
  },
};
const capSoReducer = (state: any = initialState, action: capSoAction) => {
  switch (action.type) {
    case "LOAD_DATA": {
      state.capSoList = action.payload.docs
        .map((doc: any) => ({
          ...doc.data(),
          id: doc.id,
        }))
        .sort((a: any, b: any) => {
          if (a.number > b.number) return 1;
          if (a.number < b.number) return -1;
          return 0;
        });
      return { ...state };
    }
    case "ADD_ITEM": {
      return { ...state };
    }
    case "SELECTED_ITEM": {
      state.capSoSelected = action.payload;
      return { ...state };
    }
    case "FILTER_BY_SEARCHTEXT": {
      return {
        ...state,
        filter: {
          ...state.filter,
          searchText: action.payload,
        },
      };
    }
    case "FILTER_BY_SERVICENAME": {
      return {
        ...state,
        filter: {
          ...state.filter,
          serviceName: action.payload,
        },
      };
    }
    case "FILTER_BY_STATUS": {
      return {
        ...state,
        filter: {
          ...state.filter,
          status: action.payload,
        },
      };
    }
    case "FILTER_BY_SOURCE": {
      return {
        ...state,
        filter: {
          ...state.filter,
          source: action.payload,
        },
      };
    }
    default:
      return state;
  }
};

export default capSoReducer;
