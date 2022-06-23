import { dichVuAction } from "../actions/dichVuAction";

const initialState = {
  dichVuSelected: {},
  dichVuList: [] || undefined,
  filter: {
    statusWork: "tatCa",
    searchText: "",
  },
};
const dichVuReducer = (state: any = initialState, action: dichVuAction) => {
  switch (action.type) {
    case "LOAD_DATA": {
      state.dichVuList = action.payload.docs.map((doc: any) => ({
        ...doc.data(),
        id: doc.id,
      }));
      return { ...state };
    }
    case "ADD_ITEM": {
      return { ...state };
    }
    case "SELECTED_ITEM": {
      state.dichVuSelected = action.payload;
      return { ...state };
    }
    case "UPDATE_ITEM": {
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
    case "STATUSWORK_FILTER_ONCHANGE": {
      return {
        ...state,
        filter: {
          ...state.filter,
          statusWork: action.payload,
        },
      };
    }
    default:
      return state;
  }
};
export default dichVuReducer;
