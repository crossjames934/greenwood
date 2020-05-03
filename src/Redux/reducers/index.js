import {SET_ACTIVE_COMPONENT, SET_LOCATION} from "../actionTypes/actionTypes";
import {initialState} from "../initialState";

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ACTIVE_COMPONENT:
      return {
        ...state,
        activeComponent: action.payload
      };
    default:
      return state
  }
}

export default rootReducer;