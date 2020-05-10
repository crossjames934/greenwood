import {determineMaxFromProperty} from "./determineMaxFromProperty";

export const determineNewStats = (state, update) => {
  const newState = {};
  const propertiesForChanging = Object.keys(update);
  propertiesForChanging.forEach(property => {
    newState[property] = state[property];
    const updateValue = update[property];
    const max = determineMaxFromProperty(state, property);
    newState[property] += updateValue;
    if (newState[property] > max) newState[property] = max;
  });
  return newState;
};

