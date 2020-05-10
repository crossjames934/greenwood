import {
  UPDATE_STATS,
  PUSH_NOTIFICATION,
  SET_ACTIVE_COMPONENT,
  SET_STATE,
  PASS_MINUTES, SET_TIME_TO
} from "../actionTypes/actionTypes";

export function setActiveComponent(payload) {
  return { type: SET_ACTIVE_COMPONENT, payload }
}

export function setState(payload) {
  return { type: SET_STATE, payload }
}

export function updateStats(payload) {
  return { type: UPDATE_STATS, payload }
}

export function pushNotification(payload) {
  return { type: PUSH_NOTIFICATION, payload }
}

export function passMinutes(payload) {
  return { type: PASS_MINUTES, payload }
}

export function setTimeTo(payload) {
  return { type: SET_TIME_TO, payload }
}