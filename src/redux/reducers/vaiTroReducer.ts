import { vaiTroAction } from "../actions/vaiTroAction";

const initialState = {
  vaiTroList: [],
  vaiTroSelected: {},
  filter: {
    searchText: "",
  },
};
const vaiTroReducer = (state: any = initialState, action: vaiTroAction) => {
  switch (action.type) {
    case "LOAD_DATA": {
      state.vaiTroList = action.payload.docs.map((doc: any) => ({
        ...doc.data(),
        id: doc.id,
      }));
      return { ...state };
    }
    case "ADD_ITEM": {
      return { ...state };
    }
    case "SELECTED_ITEM": {
      state.vaiTroSelected = action.payload;
      return { ...state };
    }
    case "UPDATE_ITEM": {
      return { ...state };
    }
    case "FILTER_ONCHANGE": {
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
export default vaiTroReducer;
