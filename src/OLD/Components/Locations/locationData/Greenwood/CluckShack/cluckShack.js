import {CLUCK_SHACK, SQUALOR_SQUARE} from "../../../locationIdentifiers";
import {askForJob} from "./actions/askForJob";
import {
  ENERGY,
  HYGIENE,
  MINUTES_PASSED,
  MONEY,
  NOURISHMENT,
  VENUE_STATUS
} from "../../../../Shared/StringConstants/Statistics";
import {EMPLOYED} from "../../../../Shared/StringConstants/VenueStatus";

export const cluckShack = {
  name: "Greenwood",
  description: "Proudly achieved double digits for 'Hours Since Last Homicide Award' in 2003",
  navOptions: [
    {
      id: SQUALOR_SQUARE,
      label: 'Back',
      color: 'info'
    },
  ],
  actionOptions: [
    {
      specialAction: askForJob,
      label: "Ask For Job",
      checkIfAllowed: (stats) => !stats[VENUE_STATUS][CLUCK_SHACK].includes(EMPLOYED)
    },
    {
      action: { [MONEY]: 48, [NOURISHMENT]: -10, [ENERGY]: -60, [HYGIENE]: -25, [MINUTES_PASSED]: 8 * 60 },
      label: "Work Shift",
      checkIfAllowed: (stats) => stats[VENUE_STATUS][CLUCK_SHACK].includes(EMPLOYED)
    },
    {
      action: { [MONEY]: -3, [NOURISHMENT]: 12, [ENERGY]: -1, [HYGIENE]: -4 },
      label: "Buy and Eat Chicken Piece"
    }
  ]
};