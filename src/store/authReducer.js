import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated: true
}

const authSlice = createSlice({
    name:'Auth',
    initialState,
    reducers:{
        login(state) {
            state.isAuthenticated =  true
        },
        logout(state){
            debugger;
            state.isAuthenticated = false
        }
    }
})

export const authSliceAction = authSlice.actions;

export default authSlice.reducer;