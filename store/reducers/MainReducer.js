import {
  UPDATE_WHEN,
  UPDATE_WHERE,
  UPDATE_FEELS_BEFORE,
  UPDATE_FEELS_NOW,
  UPDATE_NAME,
  UPDATE_PEOPLE_PRESENT,
  UPDATE_STORY,
  UPDATE_MESSAGE,
  UPDATE_LANGUAGE
} from '../constants';

const MainReducerDefaultState = {
  when: '',
  where: '',
  story: '',
  peoplePresent: '',
  feelsBefore: '',
  feelsNow: '',
  reported: false,
  name: '',
  language: 1
};

export default (state = MainReducerDefaultState, action) => {
  switch (action.type) {
    case UPDATE_LANGUAGE:
      console.log('got here');
      return {
        ...state,
        language: action.payload
      };
    case UPDATE_STORY:
      return {
        ...state,
        story: action.payload
      };
    case UPDATE_FEELS_BEFORE:
      return {
        ...state,
        feelsBefore: action.payload
      };

    case UPDATE_FEELS_NOW:
      return {
        ...state,
        feelsNow: action.payload
      };

    case UPDATE_NAME:
      return {
        ...state,
        name: action.payload
      };

    case UPDATE_PEOPLE_PRESENT:
      return {
        ...state,
        peoplePresent: action.payload
      };
    case UPDATE_WHEN:
      return {
        ...state,
        when: action.payload
      };

    case UPDATE_WHERE:
      return {
        ...state,
        where: action.payload
      };
    default:
      return state;
  }
};
