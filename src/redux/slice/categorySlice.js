import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    current: {},
    data: [],
    isPendding: false
}

export const categorySlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        fetch: (state, action) => {
            state.data = action.payload;
        }
    }
})

export const { actions: categoryAct } = categorySlice;

export default categorySlice.reducer;