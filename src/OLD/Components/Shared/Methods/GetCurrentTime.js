import {startDateOfGame} from "../StartDateOfGame";

export const getCurrentTime = (minutesPassed) => {
  return startDateOfGame().add(minutesPassed, 'minutes');
};