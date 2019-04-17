import { GET_SCHEDULE } from './types';
import mlbPostSeason from '../apis/mlbPostSeason';

export const getSchedule = id => async dispatch => {
  const response = await mlbPostSeason.get(`/users/${id}`);
  console.log('payload', response.data);
  dispatch({ type: GET_SCHEDULE, payload: response.data.series });
};
