import {
  UPDATE_WHEN,
  UPDATE_WHERE,
  UPDATE_FEELS_BEFORE,
  UPDATE_FEELS_NOW,
  UPDATE_NAME,
  UPDATE_PEOPLE_PRESENT,
  UPDATE_STORY,
  UPDATE_LANGUAGE
} from '../constants';

export const updateLanguage = (val = 1) => ({
  type: UPDATE_LANGUAGE,
  payload: val
});
export const updateWhen = (val = '') => ({ type: UPDATE_WHEN, payload: val });
export const updatePeoplePresent = (val = '') => ({
  type: UPDATE_PEOPLE_PRESENT,
  payload: val
});
export const updateWhere = (val = '') => ({ type: UPDATE_WHERE, payload: val });

export const updateFeelsBefore = (val = '') => ({
  type: UPDATE_FEELS_BEFORE,
  payload: val
});
export const updateFeelsNow = (val = '') => ({
  type: UPDATE_FEELS_NOW,
  payload: val
});
export const updateName = (val = '') => ({ type: UPDATE_NAME, payload: val });
export const updateStory = (val = '') => ({ type: UPDATE_STORY, payload: val });
