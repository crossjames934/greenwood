import {SQUALOR_SQUARE, SS_BEDROOM} from "../../../../locationIdentifiers";
import {ENERGY, HYGIENE, MINUTES_PASSED} from "../../../../../Shared/StringConstants/Statistics";

export const ssBathroom = {
  name: "Bathroom (Squalor Square)",
  description: "A step up from a hole in the ground... actually that's a lie",
  navOptions: [
    {
      id: SQUALOR_SQUARE,
      label: 'Back',
      color: 'info'
    },
  ],
  actionOptions: [
    {
      action: { [HYGIENE]: 100, [MINUTES_PASSED]: 15, [ENERGY]: -4 },
      label: 'Shower'
    },
    {
      action: { [HYGIENE]: 10, [MINUTES_PASSED]: 2, [ENERGY]: -1 },
      label: "Brush Teeth"
    }
  ]
};