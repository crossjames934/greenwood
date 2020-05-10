export function determineMaxFromProperty(state, property) {
  if (property === "health") return state.maxHealth;
  if (property === "energy") return state.maxEnergy;
  return 100;
}
