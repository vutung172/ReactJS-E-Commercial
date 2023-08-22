import { put, call } from 'redux-saga/effects';
import { productApi } from '../api/product-api';
import { productAct } from '../slice/productSlice';


export const productSaga = {
    fetch: function* () {
        try {
            let response = yield call(productApi.getAll);
            yield put(productAct.fetch(response));
        } catch (error) {
            console.log(error);
        }
    },
    post: function* (action) {
        try {
            console.log("productSaga", action);
            yield call(productApi.post, action.payload);
            yield put({type: "PRODUCT_FETCH"});
        } catch (error) {
            console.log(error);
        }
    },
    put: function* (action) {
        try {
            yield call(productApi.put, action.payload);
            yield put({type: "PRODUCT_FETCH"});
        } catch (error) {
            console.log(error);
        }
    },
    delete: function* (action) {
        try {
            yield call(productApi.delete, action.payload);
            yield put({type: "PRODUCT_FETCH"});
        } catch (error) {
            console.log(error);
        }
    }
    
}