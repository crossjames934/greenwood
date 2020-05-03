import {SET_ACTIVE_COMPONENT, SET_STATE} from "../actionTypes/actionTypes";

export function setActiveComponent(payload) {
  return { type: SET_ACTIVE_COMPONENT, payload }
}

export function setState(state) {
  return { type: SET_STATE, state }
}