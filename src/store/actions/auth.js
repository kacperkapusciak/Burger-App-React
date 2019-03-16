import * as actionTypes from './actionTypes';
import axios from 'axios';
import { apiKey } from '../../apiKey';

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  };
};

export const authSuccess = (token, userId) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token: token,
    userId: userId
  };
};

export const authFail = error => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error
  };
};

export const logout = () => ({
  type: actionTypes.AUTH_INITIATE_LOGOUT
});

export const chechAuthTimeout = expirationTime => {
  return dispatch => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime * 1000);
  };
};

export const auth = (email, password, isSignup) => {
  return dispatch => {
    dispatch(authStart());
    const authData = {
      email: email,
      password: password,
      returnSecureToken: true
    };
    
    let url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/'
    if (!isSignup) {
      url += 'verifyPassword?key=' + apiKey;
    } else {
      url += 'signupNewUser?key=' + apiKey;
    }

    axios.post(url, authData)
    .then(res => {
      const exporationDate = new Date(new Date().getTime() + res.data.expiresIn * 1000);
      localStorage.setItem('token', res.data.idToken);
      localStorage.setItem('expirationDate', exporationDate);
      localStorage.setItem('userId', res.data.localId);
      dispatch(authSuccess(res.data.idToken, res.data.localId));
      dispatch(chechAuthTimeout(res.data.expiresIn));
    })
    .catch(err => {
      dispatch(authFail(err.response.data.error));
    })
  };
};

export const setAuthRedirectPath = path => {
  return {
    type: actionTypes.SET_AUTH_REDIRECT_PATH,
    path: path
  };
};

export const authCheckState = () => {
  return dispatch => {
    const token = localStorage.getItem('token');
    if (!token) {
      dispatch(logout());
    } else {
      const expirationDate = new Date(localStorage.getItem('expirationDate'));

      if (expirationDate > new Date()){
        const userId = localStorage.getItem('userId');
        dispatch(authSuccess( token, userId ));
        dispatch(chechAuthTimeout( (expirationDate.getTime() - new Date().getTime()) / 1000 ));
      } else {
        dispatch(logout());
      }
      dispatch(authSuccess())
    }
  };
};
