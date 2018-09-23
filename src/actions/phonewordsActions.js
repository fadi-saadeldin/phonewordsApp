 import axios from 'axios';
import {
  GET_WORDS_RESULTS,
  CLEAR_WORDS,
  SPINNER_LOADING,
  PHONE_CHANGED,
  GET_ERROR
} from './types';
const  APP_URL='https://react-phonewords.herokuapp.com/';
// on Change phone
export const phoneChanged = (text) => {
  return {
    type: PHONE_CHANGED,
    payload: text
  };
};
// on clear words
export const clearWords = () => {
  return {
    type: CLEAR_WORDS
    };
};


// Get Phone Words
export const getPhoneWords = (numbers) => dispatch => {
  axios
  .get(APP_URL+`api/phonewords?numbers=${numbers}`)
  .then(res =>
      dispatch({
        type: GET_WORDS_RESULTS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERROR
      })
    );
};
