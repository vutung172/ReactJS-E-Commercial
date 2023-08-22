import { all, takeLatest } from 'redux-saga/effects'
import { userSaga } from './userSaga'
import { productSaga } from './productSaga'
import { categorySaga } from './categorySaga'
import { orderSaga } from './orderSaga'

export const rootSaga = function* () {
    yield all([
        takeLatest("USER_FETCH", userSaga.fetch),
        takeLatest("USER_POST", userSaga.post),
        takeLatest("USER_LOGIN", userSaga.login),
        // takeLatest("USER_LOGIN_FAILURE"),
        // takeLatest("USER_SET_CURRENT_USER", userSaga.setCurrentUser),
        takeLatest("USER_LOGOUT", userSaga.logout),
        takeLatest("PRODUCT_FETCH", productSaga.fetch),
        takeLatest("PRODUCT_POST", productSaga.post),
        takeLatest("PRODUCT_PUT", productSaga.put),
        takeLatest("PRODUCT_DELETE", productSaga.delete),
        // takeLatest("PRODUCT_SORT_ASC", productSaga.sortAsc),
        takeLatest("CATEGORY_FECTH", categorySaga.fetch),
        takeLatest("ORDER_FECTH", orderSaga.fetch),
        takeLatest("ORDER_FECTH_DETAILS", orderSaga.fetchDetails),
        takeLatest("ORDER_UPDATE", orderSaga.edit), 
    ])
}