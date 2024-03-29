import { actions } from "./actions";

const initialState = "";

const inputReducer = (state = initialState, action) => {
  if (action.type === actions.QUERY_CHANGE) {
    return action.payload;
  }
  return state;
};

export default inputReducer;
