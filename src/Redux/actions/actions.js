import {UPDATE_STATS, PUSH_NOTIFICATION, SET_ACTIVE_COMPONENT, SET_STATE} from "../actionTypes/actionTypes";

export function setActiveComponent(payload) {
  return { type: SET_ACTIVE_COMPONENT, payload }
}

export function setState(state) {
  return { type: SET_STATE, state }
}

export function updateStats(update) {
  return { type: UPDATE_STATS, update }
}

export function pushNotification(notification) {
  return { type: PUSH_NOTIFICATION, notification }
}