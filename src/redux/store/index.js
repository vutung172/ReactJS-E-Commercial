import {configureStore} from '@reduxjs/toolkit'
import userReducers from '../slice/userSlice'
import productReducers from '../slice/productSlice'
import categoryReducers from '../slice/categorySlice'
import cartReducers from '../slice/cartSlice'
import orderReducers from '../slice/orderSlice'
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from '../saga';

const sagaMiddleware = createSagaMiddleware();

export const storeApp = configureStore({
    reducer: {
        users: userReducers,
        products: productReducers,
        categories: categoryReducers,
        carts: cartReducers,
        orders: orderReducers
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
})

sagaMiddleware.run(rootSaga)