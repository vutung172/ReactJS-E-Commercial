import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    data: [],
    page: 1,
    limit: 5,
    pennding: false
}
export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        fetchSuccess: (state, action) => {
            state.data = action.payload;
        },
        fetchUserById: (state, action) => {
            state.data = action.payload;
        },
        updatePage: (state, action) => {
            state.page = action.payload;
        },
        setPennding: (state, action) => {
            state.pennding = action.payload;
        }
    }
})

export const { actions: userAct } = userSlice;
export default userSlice.reducer;