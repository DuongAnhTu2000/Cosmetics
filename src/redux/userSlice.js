import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getUser = createAsyncThunk('user/getUser', async () => {

  try {
    console.log("1")
    const response = await axios.get("https://625bf62850128c570209bacc.mockapi.io/user")
    console.log("2")

    return response.data

  } catch (err) {
    console.log(err)
  }
})

export const addUser = createAsyncThunk('user/add', async (user) => {

  try {
    console.log({ user });
    const res = await axios.post("https://625bf62850128c570209bacc.mockapi.io/user", user)
    return res.data

  } catch (err) {
    console.log(err)
  }
})
export const updateUser = createAsyncThunk('user/update', async (dataUpdate) => {

  try {
    const response = await axios.put(`https://625bf62850128c570209bacc.mockapi.io/user/${dataUpdate.id}`, dataUpdate.newData);
    return response.data

  } catch (err) {
    console.log(err)
  }
})
export const deleteUser = createAsyncThunk('user/delete', async (id) => {
  console.log(id)
  try {
    const response = await axios.delete(`https://625bf62850128c570209bacc.mockapi.io/user/${id}`)
    return response.data
  } catch (err) {
    console.log(err)
  }
})


const userSlice = createSlice({
  name: "user",
  initialState: {
    user: [],
    isFetching: false,
  },
  reducer: {

  },
  extraReducers: (builder) => {

    builder.addCase(getUser.pending, (state, action) => {
      state.isFetching = false;
    });

    builder.addCase(getUser.fulfilled, (state, action) => {
      state.isFetching = true;
      state.user = action.payload;
    });
    builder.addCase(addUser.pending, (state, action) => {
      state.isFetching = false;
      console.log("false");
    });

    builder.addCase(addUser.fulfilled, (state, action) => {
      // state.isFetching = true;
      console.log("true");
      console.log('payload == ', action.payload);
      // state.user = action.payload;

    });

    builder.addCase(updateUser.pending, (state, action) => {
      state.isFetching = false;
    })
    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.isFetching = true;
    })
    builder.addCase(deleteUser.pending, (state, action) => {
      state.isFetching = false;

    });
    builder.addCase(deleteUser.fulfilled, (state, action) => {
      state.isFetching = true;
    });
  }
});

export const {
  userReducer
} = userSlice.actions;
export default userSlice.reducer;