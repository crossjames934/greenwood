import {NOTIFICATIONS, VENUE_STATUS} from "../../../../../Shared/StringConstants/Statistics";
import {toast} from 'react-toastify';
import {CLUCK_SHACK} from "../../../../locationIdentifiers";
import {EMPLOYED} from "../../../../../Shared/StringConstants/VenueStatus";

export const askForJob = (stats, setStats) => {
  const venueStatus = stats[VENUE_STATUS];
  const notifications = stats[NOTIFICATIONS];
  venueStatus[CLUCK_SHACK].push(EMPLOYED);
  notifications.push({text: 'Congratulations you got the job at Cluck Shack.', color: 'success'});
  setStats({[VENUE_STATUS]: venueStatus});
  toast.success("Congratulations! You got the job!");
};