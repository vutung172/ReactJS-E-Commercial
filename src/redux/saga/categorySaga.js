import { put, call } from 'redux-saga/effects'
import { categoryApi } from '../api/category-api';
import { categoryAct } from '../slice/categorySlice';

export const categorySaga = {
    fetch: function* () {
        try {
            let data = yield call(categoryApi.getAll);
            yield put(categoryAct.fetch(data));
        } catch (error) {
            console.log(error);
        }
    }
}