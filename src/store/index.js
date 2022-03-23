import {createStore} from 'redux';
// import { connect } from 'react-redux'

import { createSlice, configureStore } from "@reduxjs/toolkit";
import counterSlice from './counterReducer';
import authSlice from "./authReducer";
import counterReducer from './counterReducer';
import authReducer from './authReducer';

// const initialState = {counter: 0, showCounter: true}

// const countReducer = (state = initialState, action) => {
//     debugger;
//     if(action.type == 'INC') {
//         return {
//             showCounter: state.showCounter,
//             counter : state.counter + 1
//         } 
//     }
//     if(action.type == 'DEC') {
//         return {
//             showCounter: state.showCounter,
//             counter : state.counter - 1
//         } 
//     }

//     if(action.type == 'INCREASE') {
//         return {
//             showCounter: state.showCounter,
//             counter : state.counter + action.amount
//         } 
//     }

//     if(action.type == 'TOGGLE') {
//         debugger;
//         return {
            
//             counter : state.counter,
//             showCounter: !state.showCounter,
//         } 
//     }

//     return state;
// }

// const store = createStore(countReducer);

// const counterSlice = createSlice({
//     name: 'counter',
//     initialState,
//     reducers: {
//         increment(state) {
//             state.counter++
//         },
//         decrement(state) {
//             state.counter--
//         },
//         increase(state, action) {
//             state.counter = state.counter + action.payload;
//         },
//         toggle(state) {
//             debugger;
//             state.showCounter = !state.showCounter
//         }  
//     }
// })

const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer
    }
});

// export const counterSliceActions = counterSlice.actions;

export default store;