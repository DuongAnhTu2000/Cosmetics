import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from "axios";


export const login = createAsyncThunk(
    "users/login",
    async ({ email, password }, thunkAPI) => {
      try {
        const response = await axios(
          "https://reqres.in/api/login",
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email,
              password,
            }),
          }
        )
        let data = await response.json()
        console.log("response", data)
        if (response.status === 200) {
          localStorage.setItem("token", data.token)
          return data
        } else {
          return thunkAPI.rejectWithValue(data)
        }
      } catch (e) {
        console.log("Error", e.response.data)
        thunkAPI.rejectWithValue(e.response.data)
      }
    }
  )



const authSlice = createSlice({
    name: 'auth',
    initialState: {
      isAuth: JSON.parse(localStorage.getItem('authState'))?.isAuth
        ? JSON.parse(localStorage.getItem('authState')).isAuth
        : false,
      token: JSON.parse(localStorage.getItem('authState'))?.token
        ? JSON.parse(localStorage.getItem('authState')).token
        : '',
      name: JSON.parse(localStorage.getItem('authState'))?.name
        ? JSON.parse(localStorage.getItem('authState')).name
        : '',
      email: JSON.parse(localStorage.getItem('authState'))?.email
        ? JSON.parse(localStorage.getItem('authState')).email
        : '',
    },

    reducers: {
      signin(state, action) {
        
        localStorage.setItem('authState', JSON.stringify(action.payload)); // authState object has token and isAuth property.
        state.isAuth = true;
      },
      signout(state, action) {
        //localStorage.removeItem('token');
        localStorage.clear();
        state.isAuth = false;
      },
    },
})

export const { loginStart, loginSuccess, loginFailure } = authSlice.actions;
export default authSlice.reducer;