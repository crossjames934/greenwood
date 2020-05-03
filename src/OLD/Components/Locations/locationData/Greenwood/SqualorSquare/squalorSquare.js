import {GREENWOOD, SS_BATHROOM, SS_BEDROOM} from "../../../locationIdentifiers";
import {faBed, faShower} from '@fortawesome/free-solid-svg-icons';

export const squalorSquare = {
  name: "Squalor Square",
  description: "An awful place to live",
  navOptions: [
    {
      id: GREENWOOD,
      label: "Go outside (Greenwood)",
      color: 'info'
    },
    {
      id: SS_BEDROOM,
      label: "Bedroom",
      icon: faBed
    },
    {
      id: SS_BATHROOM,
      label: "Bathroom",
      icon: faShower
    }
  ]
};