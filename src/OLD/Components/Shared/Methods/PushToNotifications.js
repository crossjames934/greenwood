import {NOTIFICATIONS} from "../StringConstants/Statistics";

export const pushToNotifications = (notification, gameStats, setGameStats) => {
  const currentNotifications = gameStats[NOTIFICATIONS];
  currentNotifications.push(notification);
  setGameStats({[NOTIFICATIONS]: currentNotifications});
};