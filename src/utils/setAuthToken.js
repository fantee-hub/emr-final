import httpService from './axios';

const setAuthToken = (token) => {
  if (token) {
    // apply authorization token to every request if logged in
    httpService.defaults.headers.common['Authorization'] = token;
  } else {
    // delete auth header
    delete httpService.defaults.headers.common['Authorization'];
  }
};

export default setAuthToken;
