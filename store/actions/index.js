import { UPDATE_MESSAGE, INCREASE_COUNTER } from '../constants';

export const updateMessage = (message = 'Hello World') => {
  return {
    type: UPDATE_MESSAGE,
    payload: message
  };
};

export const increaseCounter = () => ({ type: INCREASE_COUNTER });
