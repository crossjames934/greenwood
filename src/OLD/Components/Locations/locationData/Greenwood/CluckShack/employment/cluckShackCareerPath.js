import {defaultActionEffect} from "../../../../../Shared/Methods/DefaultActionEffect";
import {ENERGY, HYGIENE, MINUTES_PASSED, MONEY} from "../../../../../Shared/StringConstants/Statistics";

export const cluckShackCareerPath = [
  {
    position: 'Kitchen Associate',
    startTime: 8, // hours since midnight
    daysOfWork: [1, 2, 3, 4, 5],
    description: 'The dream job for those who want to spend all day selling greasy fried chicken',
    effect: {
      [MINUTES_PASSED]: 8 * 60,
      [ENERGY]: -60,
      [HYGIENE]: -40,
      [MONEY]: 8 * 7
    }
  },
  {
    position: 'Team Leader',
    startTime: 6, // hours since midnight
    daysOfWork: [1, 2, 3, 4, 5],
    description: 'Pretty much the same job as a kitchen associate, but a lot more stressful for a tiny bit more pay',
    effect: {
      [MINUTES_PASSED]: 10 * 60,
      [ENERGY]: -65,
      [HYGIENE]: -45,
      [MONEY]: 8 * 9
    }
  },
  {
    position: 'Kitchen Manager',
    startTime: 6, // hours since midnight
    daysOfWork: [1, 2, 3, 4, 5, 6],
    description: 'Now you get to boss people around. Look at you, being all bossy and whatnot',
    effect: {
      [MINUTES_PASSED]: 10 * 60,
      [ENERGY]: -70,
      [HYGIENE]: -40,
      [MONEY]: 10 * 12
    }
  },
  {
    position: 'Mother Clucker',
    startTime: 6, // hours since midnight
    daysOfWork: [1, 2, 3, 4, 5, 6],
    description: 'You have reached the pinnacle of this career path. Congratulations.',
    effect: {
      [MINUTES_PASSED]: 10 * 60,
      [ENERGY]: -40,
      [HYGIENE]: -20,
      [MONEY]: 10 * 15
    }
  },
];