import { put, call } from 'redux-saga/effects';
import { userApi } from '../api/user-api'
import { userAct } from '../slice/userSlice'

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
    fetchUserID: function* (action) {
        try {
            console.log(action);
            let response = yield call(userApi.getLoginByUserID);
            return response.data
            
        } catch (error) {
            yield put("FETCH_ERROR");
        }
    },

    post: function* (action) {
        try {
            //call api post
            // update state pennding = true
            //yield put(userAct.setPennding(true));

            //cal success
            //console.log("Post success");
            //yield put(userAct.setPennding(false));

            // let data = yield call(userApi.getPaginations);
            // yield put(userAct.updatePage(action.payload || 1));
            // yield put(userAct.fetchSuccess(data));
            yield put({type: "USER_FETCH", payload: 1})
        } catch (error) {
            yield put("FETCH_ERROR");
        }
    }
}