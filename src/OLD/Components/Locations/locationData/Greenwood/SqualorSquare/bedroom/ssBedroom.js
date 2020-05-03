import {SQUALOR_SQUARE} from "../../../../locationIdentifiers";
import {ENERGY, HEALTH, HYGIENE, MINUTES_PASSED, NOURISHMENT} from "../../../../../Shared/StringConstants/Statistics";

export const ssBedroom = {
  name: "Bedroom (Squalor Square)",
  description: "The stench should help block out the noise of the neighbours screaming when you attempt to sleep tonight.",
  navOptions: [
    {
      id: SQUALOR_SQUARE,
      label: 'Back',
      color: 'info'
    },
  ],
  actionOptions: [
    {
      action: { [ENERGY]: 100, [MINUTES_PASSED]: 6 * 60, [HEALTH]: 10, [NOURISHMENT]: -20, [HYGIENE]: -30 },
      label: "Sleep",
      notification: { text: 'You slept peacefully for 6 hours, despite all the gun shot noises right outside the window', color: 'success' }
    },
    {
      action: { [NOURISHMENT]: 5, [MINUTES_PASSED]: 15, [ENERGY]: -2 },
      label: "Cook noodles in kettle"
    }
  ]
};


