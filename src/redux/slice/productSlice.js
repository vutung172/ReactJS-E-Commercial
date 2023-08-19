import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    current: {},
    data: [],
    isPendding: false
}

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        fetch: (state, action) => {
            state.data = action.payload;
        }
    }
})

export const {actions: productAct} = productSlice;

export default productSlice.reducer;