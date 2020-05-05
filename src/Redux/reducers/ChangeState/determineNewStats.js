export const determineNewStats = (state, update) => {
  const propertiesForChanging = Object.keys(update);
  propertiesForChanging.forEach(property => {
    const updateValue = update[property];
    const statMaxIsDefault100 = typeof state[property] === "number";
    const max = statMaxIsDefault100 ? 100 : state[property].max;
    if (statMaxIsDefault100) {
      state[property] += updateValue;
      if (state[property] > max) state[property] = max;
    } else {
      state[property].value += updateValue;
      if (state[property].value > max) state[property].value = max;
    }
  });
  return state;
};