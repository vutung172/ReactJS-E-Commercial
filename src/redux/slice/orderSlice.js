import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: [],
    orderDetails: []
}

export const orderSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        fetch: (state, action) => {
            state.data = action.payload;
        },
        fetchDetails: (state, action) => {
            state.orderDetails = action.payload;
        }
    }
})

export const {actions: orderAct} = orderSlice;

export default orderSlice.reducer;