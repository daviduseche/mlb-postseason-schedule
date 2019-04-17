import { GET_SCHEDULE } from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case GET_SCHEDULE:
      return action.payload;

    default:
      return state;
  }
};
