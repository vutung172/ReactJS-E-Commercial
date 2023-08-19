import { put, call } from 'redux-saga/effects'
import { orderApi } from '../api/order-api';
import { orderAct } from '../slice/orderSlice';

export const orderSaga = {
    fetch: function* () {
        try {
            let data = yield call(orderApi.get);
            yield put(orderAct.fetch(data));
        } catch (error) {
            console.log(error);
        }
    },
    fetchDetails: function* (action) {
        try {
            let data = yield call(orderApi.getDetails, action.payload);
            yield put(orderAct.fetchDetails(data));
        } catch (error) {
            console.log(error);
        }
    },
    edit: function* (action) {
        try {
            yield call(orderApi.put, action.payload);
            yield put("ORDER_FECTH");
        } catch (error) {
            console.log(error);
        }
    }
}