import {MAXIMUMS, NOTIFICATIONS} from "../StringConstants/Statistics";

export const defaultActionEffect = (effect, currentStats, setStats) => {
  const effectProperties = Object.keys(effect);
  const setStateObject = {};
  const insufficientProperties = [];
  effectProperties.forEach(property => {
    const sumValue = effect[property] + currentStats[property];
    if (sumValue < 0) {
      insufficientProperties.push(property);
    }
    const max = currentStats[MAXIMUMS][property];
    setStateObject[property] = !!max && sumValue > max ? max : sumValue;
  });
  if (insufficientProperties.length > 0) {
    const notifications = currentStats[NOTIFICATIONS];
    return notifications.push({text: `Sorry, you do not have enough of these to complete the action: ${insufficientProperties.join(", ")}`});
  }
  setStats(setStateObject);
};



