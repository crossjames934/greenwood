import {SET_ACTIVE_COMPONENT} from "../actionTypes/actionTypes";

export function setActiveComponent(payload) {
  return { type: SET_ACTIVE_COMPONENT, payload }
}