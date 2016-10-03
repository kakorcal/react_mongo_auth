import axios from 'axios'

export function userSignupRequest(userData){
  // redux thunk returns a function instead of an object
  return dispatch => {
    return axios.post('/api/users', userData);
  };
}