import React from 'react';
import moment from 'moment';
import Greenwood from "../Locations/Greenwood/Greenwood";

const startOfGameTime = new moment('01/01/2025 05:00', 'DD/MM/YYYY HH:mm');

export const initialState = {
  health: 100,
  energy: 100,
  nourishment: 100,
  hygiene: 100,
  zen: 100,
  money: 50,
  maxHealth: 100,
  maxEnergy: 100,
  activeComponent: <Greenwood/>,
  notifications: [],
  gameTime: startOfGameTime,
  experience: {
    strength: 0,
    reflexes: 0,
    marksmanship: 0,
    stealth: 0,
    cooking: 0,
    charisma: 0,
    engineering: 0,
    programming: 0,
  }
};