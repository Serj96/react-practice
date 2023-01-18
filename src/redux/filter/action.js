import { FILTER } from './actionTypes';

export const filter = payload => {
  return { type: FILTER, payload };
};
