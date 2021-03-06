import axios from 'axios'
import {SET_CURRENT_USER} from './types'
import setAuthorizationToken from '../utils/setAuthorizationToken'

export function login(data){
  return dispatch => {
    return axios.post('/api/auth', data);
  };
}

export function setCurrentUser(user){
  return {
    type: SET_CURRENT_USER,
    user
  }
}

export function logout() {
  return dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthorizationToken(false);
    dispatch(setCurrentUser({}));
  };
}