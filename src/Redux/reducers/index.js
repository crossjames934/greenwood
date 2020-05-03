import {SET_LOCATION} from "../actionTypes/actionTypes";
import {initialState} from "../initialState";

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOCATION:
      return {
        ...state,
        location: action.payload
      };
    default:
      return state
  }
}

export default rootReducer;