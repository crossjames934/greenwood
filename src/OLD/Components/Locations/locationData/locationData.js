import {CLUCK_SHACK, GREENWOOD, SQUALOR_SQUARE, SS_BATHROOM, SS_BEDROOM} from "../locationIdentifiers";
import {squalorSquare} from "./Greenwood/SqualorSquare/squalorSquare";
import {ssBedroom} from "./Greenwood/SqualorSquare/bedroom/ssBedroom";
import {greenwood} from "./Greenwood/greenwood";
import {ssBathroom} from "./Greenwood/SqualorSquare/bathroom/ssBathroom";
import {cluckShack} from "./Greenwood/CluckShack/cluckShack";

export const locationData = {
  [GREENWOOD]: greenwood,
  [SQUALOR_SQUARE]: squalorSquare,
  [SS_BEDROOM]: ssBedroom,
  [SS_BATHROOM]: ssBathroom,
  [CLUCK_SHACK]: cluckShack
};