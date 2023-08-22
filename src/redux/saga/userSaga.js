import { put, call } from "redux-saga/effects";
import { userApi } from "../api/user-api";
import { userAct } from "../slice/userSlice";
import { useDispatch } from "react-redux";

export const userSaga = {
  fetch: function* (action) {
    try {
      console.log(action);
      let data = yield call(userApi.getPaginations, action.payload || 1);
      yield put(userAct.updatePage(action.payload || 1));
      yield put(userAct.fetchSuccess(data));
    } catch (error) {
      yield put("FETCH_ERROR");
    }
  },
  login: function* (action) {
    try {
      console.log(action);
      let user = yield call(
        userApi.getLogin,
        action.payload.userId,
        action.payload.password
      );
      console.log(user);
      if (user != "") {
        yield put(userAct.login(user)); 
      } else {
        console.log("sai tk va mk");
        alert("Your user and password are incorrect. Please re-sign in.");
        yield put(userAct.logout());
      }
    } catch (error) {
      yield put("FETCH_ERROR");
    }
  },
  logout: function* () {
    try {
      yield put(userAct.logout());
  
    } catch (error) {
      console.log(error);
    }
  },

  post: function* (action) {
    try {
      // call api post
      // update state pennding = true
      yield put(userAct.setPennding(true));

      // call success
      console.log("Post success");
      yield put(userAct.setPennding(false));

      let data = yield call(userApi.getPaginations);
      yield put(userAct.updatePage(action.payload || 1));
      yield put(userAct.fetchSuccess(data));
      yield put({ type: "USER_FETCH", payload: 1 });
    } catch (error) {
      yield put("FETCH_ERROR");
    }
  },
};
