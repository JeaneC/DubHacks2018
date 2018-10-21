import { UPDATE_MESSAGE, INCREASE_COUNTER } from '../constants';

const MainReducerDefaultState = {
  counter: 0,
  message: 'Nothing'
};

export default (state = MainReducerDefaultState, action) => {
  switch (action.type) {
    case UPDATE_MESSAGE:
      return {
        ...state,
        message: action.payload
      };
    case INCREASE_COUNTER:
      return {
        ...state,
        counter: state.counter + 1
      };
    default:
      return state;
  }
};
