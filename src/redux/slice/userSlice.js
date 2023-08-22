import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  data: [],
  current: {},
  page: 1,
  limit: 5,
  pennding: false,
};
export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    fetchSuccess: (state, action) => {
      state.data = action.payload;
    },
    login: (state, action) => {
        console.log(action.payload);
        if (action.payload != '') {
            console.log("Đã đăng nhập")
            state.current = action.payload[0],
            state.current.isLogin = true;  
            console.log(state.current) 
            localStorage.setItem("myuser", JSON.stringify(state.current)) ;        
        } else { 
            state.current = {};
            console.log("Chưa đăng nhập")
            console.log(state.current)
            localStorage.setItem("myuser", JSON.stringify('{}')) ; 
        }
          
    },
    logout: (state) => {
        if (state.current != '{}') {
          state.current = {};
        // state.current.isLogin = false;
        console.log(state.current)
        localStorage.setItem("myuser", '{}');
        }
    },
    updatePage: (state, action) => {
        state.page = action.payload;
    },
    setPennding: (state, action) => {
        state.pennding = action.payload;
    },
  }
});

export const { actions: userAct } = userSlice;
export default userSlice.reducer;
