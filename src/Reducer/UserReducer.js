import { createSlice } from '@reduxjs/toolkit'
import { createUser, readUser, updateUser, deleteUser } from '../Action/UserAction'

// initial state

// slice (reducer)

// const UserSlice = createSlice({name, state, slice controller})
const UserSlice = createSlice({
    name: "user",
    initialState: { users: [] },
    extraReducers: (builder) => {
        // addCase(action,reducer)
         builder.addCase(createUser.fulfilled, (state,action) => {})
                .addCase(createUser.rejected, ()=> {})
                .addCase(readUser.fulfilled, (state,action) => {})
                .addCase(readUser.rejected, () => {})
                .addCase(updateUser.fulfilled, (state,action)=> {})
                .addCase(updateUser.rejected, () => {})
                .addCase(deleteUser.fulfilled, (state,action) => {})
                .addCase(deleteUser.rejected, () => {})
    }
})


export default UserSlice