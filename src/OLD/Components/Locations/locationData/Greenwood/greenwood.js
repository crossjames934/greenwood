import {CLUCK_SHACK, JERRISONS, SQUALOR_SQUARE} from "../../locationIdentifiers";
import {faHome, faHamburger, faShoppingCart} from '@fortawesome/free-solid-svg-icons';

export const greenwood = {
  name: "Greenwood",
  description: "Proudly achieved double digits for 'Hours Since Last Homicide Award' in 2003",
  navOptions: [
    {
      id: SQUALOR_SQUARE,
      label: "Squalor Square",
      icon: faHome
    },
    {
      id: CLUCK_SHACK,
      label: "Cluck Shack",
      icon: faHamburger
    },
    {
      id: JERRISONS,
      label: "Jerrisons",
      icon: faShoppingCart
    },
  ]
};