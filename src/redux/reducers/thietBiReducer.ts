import { thietBiAction } from "../actions/thietBiAction";

const initialState = {
  thietBiData: {},
  thietBiList: [],
  thietBiInfo: {},
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
    default:
      return state;
  }
};
export default thietBiReducer;
