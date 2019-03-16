import { delay } from "redux-saga/effects";
import { put } from "redux-saga/effects";
import axios from "axios";
import * as actions from "../actions";
import { apiKey } from "../../apiKey";

export function* logoutSaga(action) {
  yield localStorage.removeItem("token");
  yield localStorage.removeItem("expiratonDate");
  yield localStorage.removeItem("userId");
  yield put(actions.logoutSucceed());
}

export function* checkAuthTimeoutSaga(action) {
  yield delay(action.expirationTime * 1000);
  yield put(actions.logout());
}

export function* authUserSaga(action) {
  yield put(actions.authStart());
  const authData = {
    email: action.email,
    password: action.password,
    returnSecureToken: true
  };

  let url = "https://www.googleapis.com/identitytoolkit/v3/relyingparty/";
  if (!action.isSignup) {
    url += "verifyPassword?key=" + apiKey;
  } else {
    url += "signupNewUser?key=" + apiKey;
  }
  try {
    const res = yield axios.post(url, authData);

    const exporationDate = yield new Date(
      new Date().getTime() + res.data.expiresIn * 1000
    );
    yield localStorage.setItem("token", res.data.idToken);
    yield localStorage.setItem("expirationDate", exporationDate);
    yield localStorage.setItem("userId", res.data.localId);
    yield put(actions.authSuccess(res.data.idToken, res.data.localId));
    yield put(actions.chechAuthTimeout(res.data.expiresIn));
  } catch (error) {
    yield put(actions.authFail(error.response.data.error));
  }
}

export function* authCheckStateSaga(action) {
  const token = yield localStorage.getItem("token");
  if (!token) {
    yield put(actions.logout());
  } else {
    const expirationDate = yield new Date(
      localStorage.getItem("expirationDate")
    );

    if (expirationDate > new Date()) {
      const userId = yield localStorage.getItem("userId");
      yield put(actions.authSuccess(token, userId));
      yield put(
        actions.chechAuthTimeout(
          (expirationDate.getTime() - new Date().getTime()) / 1000
        )
      );
    } else {
      yield put(actions.logout());
    }
    yield put(actions.authSuccess());
  }
}
