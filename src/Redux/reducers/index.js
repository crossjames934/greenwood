import {PUSH_NOTIFICATION, SET_ACTIVE_COMPONENT, SET_STATE} from "../actionTypes/actionTypes";
import {initialState} from "../initialState";

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ACTIVE_COMPONENT:
      return {
        ...state,
        activeComponent: action.payload
      };
    case SET_STATE:
      return {
        ...state,
        ...action.state
      };
    case PUSH_NOTIFICATION:
      return {
        ...state,
        notifications: [...state.notifications, action.notification]
      };
    default:
      return state
  }
}

export default rootReducer;