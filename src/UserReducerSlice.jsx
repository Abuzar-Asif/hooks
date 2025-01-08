import { createSlice } from "@reduxjs/toolkit";
import { Data } from "./Data";

const UserReducerSlice=createSlice({
    name:"boy",
    initialState:Data,
    reducers:{
        Addusers:(state,action)=>{
            state.push(action.payload)
        }
    }
})
export const {Addusers}=UserReducerSlice.actions
export default UserReducerSlice.reducer