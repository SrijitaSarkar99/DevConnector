//import uuid from 'uuid/v4';
import { v4 as uuidv4 } from 'uuid';
import { SET_ALERT, REMOVE_ALERT } from './types';

export const setAlert = (msg, alertType) => dispatch => {
  //const id = uuid.v4();
  //const id = 'Error12345678';
  const id = uuidv4();
  dispatch({
    type: SET_ALERT,
    payload: { msg, alertType, id }
  });
};
