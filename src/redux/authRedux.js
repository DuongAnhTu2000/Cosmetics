import { createSlice } from '@reduxjs/toolkit';

const authRedux = createSlice({
    name: 'auth',
    initialState: {
        currentUser: null,
        isFetching: false,
        error: false
    },
    reducers: {
        // login
        loginStart: (state) => {
            state.isFetching = true;
        },
        loginSuccess: (state, action) => {
            state.isFetching = false;
            state.currentUser = action.payload
        },
        loginFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        }
    }
})

export const { loginStart, loginSuccess, loginFailure } = authRedux.actions;
export default authRedux.reducer;