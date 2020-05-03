import moment from 'moment';

const startOfGameTime = new moment('01/01/2025 05:00', 'DD/MM/YYYY HH:mm');

export const initialState = {
  health: {value: 100, max: 100},
  energy: {value: 100, max: 100},
  nourishment: 100,
  hygiene: 100,
  money: 50,
  location: 'squalor_square',
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