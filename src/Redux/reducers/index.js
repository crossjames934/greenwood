import {
  UPDATE_STATS,
  PUSH_NOTIFICATION,
  SET_ACTIVE_COMPONENT,
  SET_STATE,
  PASS_MINUTES, SET_TIME_TO
} from "../actionTypes/actionTypes";
import {initialState} from "../initialState";
import {determineNewStats} from "./ChangeState/determineNewStats";

function rootReducer(state = initialState, action) {
  const {type, payload} = action;
  const newTime = state.gameTime.clone();
  switch (type) {
    case SET_ACTIVE_COMPONENT:
      return {
        ...state,
        activeComponent: payload
      };
    case SET_STATE:
      return {
        ...state,
        ...payload
      };
    case UPDATE_STATS:
      const newState = determineNewStats(state, payload);
      return {
        ...state,
        ...newState
      }
    case PUSH_NOTIFICATION:
      return {
        ...state,
        notifications: [...state.notifications, payload]
      };
    case PASS_MINUTES:
      newTime.add(payload, 'minutes');
      return {
        ...state,
        gameTime: newTime
      };
    case SET_TIME_TO:
      if (!/\d\d:\d\d/.test(payload)) throw "Time must be in format Hours:Minutes";
      const [hours, minutes] = payload.split(":");
      newTime.hours(hours);
      newTime.minutes(minutes);
      if (newTime.isBefore(state.gameTime)) newTime.add(1, 'days');
      return {
        ...state,
        gameTime: newTime
      };
    default:
      return state
  }
}

export default rootReducer;